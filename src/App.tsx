import { useEffect, useState } from 'react'
import { parseMarkdown } from './lib/parseMarkdown'
import { LiveIsland } from './components/LiveIsland'

type ComponentEntry = {
  slug: string
  name: string
  designHtml: string
  bootstrapCodes: IslandEntry[]
  shadcnCodes: IslandEntry[]
  tailwindCodes: IslandEntry[]
  bootstrapUtilCodes: IslandEntry[]
  minHeight?: number
}

const BASE = import.meta.env.BASE_URL

type IslandEntry = { code: string; noInline: boolean }

async function fetchAllIslands(url: string): Promise<IslandEntry[]> {
  const res = await fetch(url)
  if (!res.ok) return []
  const md = await res.text()
  const { units } = await parseMarkdown(md)
  return units
    .filter((u) => u.type === 'island')
    .map((u) => ({ code: u.code, noInline: (u as { noInline: boolean }).noInline }))
}

async function fetchDesignHtml(slug: string): Promise<string> {
  const res = await fetch(`${BASE}catalog/${slug}.md`)
  if (!res.ok) return ''
  const md = await res.text()
  const { units } = await parseMarkdown(md)
  return units.filter((u) => u.type === 'html').map((u) => (u as { html: string }).html).join('')
}

const MIN_HEIGHTS: Record<string, number> = {
  dialog: 400,
  popover: 400,
  toast: 300,
}

async function loadComponent(slug: string): Promise<ComponentEntry> {
  const [designHtml, bootstrapCodes, shadcnCodes, tailwindCodes, bootstrapUtilCodes] = await Promise.all([
    fetchDesignHtml(slug),
    fetchAllIslands(`${BASE}catalog/${slug}-rb.md`),
    fetchAllIslands(`${BASE}catalog/${slug}-shadcn.md`),
    fetchAllIslands(`${BASE}catalog/${slug}-tw.md`),
    fetchAllIslands(`${BASE}catalog/${slug}-bs.md`),
  ])
  return {
    slug,
    name: slug.replace(/^example-/, '').split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    designHtml,
    bootstrapCodes,
    shadcnCodes,
    tailwindCodes,
    bootstrapUtilCodes,
    minHeight: MIN_HEIGHTS[slug],
  }
}

function getHash() {
  return decodeURIComponent(location.hash.slice(1))
}

function SidebarGroup({ label, entries, selected }: { label: string; entries: ComponentEntry[]; selected: string }) {
  return (
    <>
      <p className="sidebar-group-label">{label}</p>
      <ul>
        {entries.map((c) => (
          <li key={c.slug}>
            <a href={`#${c.slug}`} className={selected === c.slug ? 'active' : ''}>
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function App() {
  const [components, setComponents] = useState<ComponentEntry[]>([])
  const [examples, setExamples] = useState<ComponentEntry[]>([])
  const [selected, setSelected] = useState<string>(getHash)
  const [homeHtml, setHomeHtml] = useState<string>('')
  const [bsTab, setBsTab] = useState<'rb' | 'bs'>('rb')
  const [twTab, setTwTab] = useState<'shadcn' | 'tw'>('shadcn')

  useEffect(() => {
    fetchDesignHtml('home').then(setHomeHtml)
  }, [])

  useEffect(() => {
    fetch(`${BASE}catalog/index.json`)
      .then((r) => r.json())
      .then((index: { components: string[]; examples: string[] }) =>
        Promise.all([
          Promise.all(index.components.map(loadComponent)),
          Promise.all(index.examples.map(loadComponent)),
        ])
      )
      .then(([comps, exs]) => {
        setComponents(comps)
        setExamples(exs)
        const hash = getHash()
        const match = [...comps, ...exs].find((e) => e.slug === hash)
        setSelected(match ? match.slug : '')
      })
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = getHash()
      setComponents((comps) => {
        setExamples((exs) => {
          const match = [...comps, ...exs].find((e) => e.slug === hash)
          setSelected(match ? match.slug : '')
          return exs
        })
        return comps
      })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const current = [...components, ...examples].find((c) => c.slug === selected)
  const isLoading = components.length === 0 && examples.length === 0

  // 컴포넌트 변경 시 탭 초기화
  useEffect(() => {
    setBsTab('rb')
    setTwTab('shadcn')
  }, [selected])

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav className="sidebar">
        <a href="#" className={selected === '' ? 'sidebar-home active' : 'sidebar-home'}>홈</a>
        {components.length > 0 && <SidebarGroup label="컴포넌트" entries={components} selected={selected} />}
        {examples.length > 0 && <SidebarGroup label="예제" entries={examples} selected={selected} />}
      </nav>
      <main className="content">
        {selected === '' && homeHtml && (
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: homeHtml }} />
        )}
        {current && (
          <>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              {current.name}
            </h2>
            {current.designHtml && (
              <div className="design-body" dangerouslySetInnerHTML={{ __html: current.designHtml }} style={{ marginBottom: '2rem' }} />
            )}
            {/* Bootstrap 그룹 */}
            {(current.bootstrapCodes.length > 0 || current.bootstrapUtilCodes.length > 0) && (() => {
              const hasBoth = current.bootstrapCodes.length > 0 && current.bootstrapUtilCodes.length > 0
              const activeTab = hasBoth ? bsTab : (current.bootstrapCodes.length > 0 ? 'rb' : 'bs')
              const islands = activeTab === 'rb' ? current.bootstrapCodes : current.bootstrapUtilCodes
              const tabLabel = activeTab === 'rb' ? 'Bootstrap' : 'Bootstrap Utilities'
              return (
                <>
                  {hasBoth && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <button className={`tab-btn ${bsTab === 'rb' ? 'active' : ''}`} onClick={() => setBsTab('rb')}>Bootstrap</button>
                      <button className={`tab-btn ${bsTab === 'bs' ? 'active' : ''}`} onClick={() => setBsTab('bs')}>Bootstrap Utilities</button>
                    </div>
                  )}
                  {islands.map(({ code, noInline }, i) => (
                    <LiveIsland
                      key={`bs-${activeTab}-${current.slug}-${i}`}
                      id={`bs-${activeTab}-${current.slug}-${i}`}
                      code={code}
                      noInline={noInline}
                      title={i === 0 ? tabLabel : ''}
                      theme="bootstrap"
                      minHeight={current.minHeight}
                    />
                  ))}
                </>
              )
            })()}
            {/* shadcn / Tailwind 그룹 */}
            {(current.shadcnCodes.length > 0 || current.tailwindCodes.length > 0) && (() => {
              const hasBoth = current.shadcnCodes.length > 0 && current.tailwindCodes.length > 0
              const activeTab = hasBoth ? twTab : (current.shadcnCodes.length > 0 ? 'shadcn' : 'tw')
              const islands = activeTab === 'shadcn' ? current.shadcnCodes : current.tailwindCodes
              const tabLabel = activeTab === 'shadcn' ? 'shadcn/ui' : 'Tailwind'
              return (
                <>
                  {hasBoth && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <button className={`tab-btn ${twTab === 'shadcn' ? 'active' : ''}`} onClick={() => setTwTab('shadcn')}>shadcn/ui</button>
                      <button className={`tab-btn ${twTab === 'tw' ? 'active' : ''}`} onClick={() => setTwTab('tw')}>Tailwind</button>
                    </div>
                  )}
                  {islands.map(({ code, noInline }, i) => (
                    <LiveIsland
                      key={`tw-${activeTab}-${current.slug}-${i}`}
                      id={`tw-${activeTab}-${current.slug}-${i}`}
                      code={code}
                      noInline={noInline}
                      title={i === 0 ? tabLabel : ''}
                      theme="shadcn"
                      minHeight={current.minHeight}
                    />
                  ))}
                </>
              )
            })()}
          </>
        )}
        {isLoading && <div className="loading">로딩 중...</div>}
      </main>
    </div>
  )
}
