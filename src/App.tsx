import { useEffect, useState } from 'react'
import { parseMarkdown } from './lib/parseMarkdown'
import { LiveIsland } from './components/LiveIsland'

type ComponentEntry = {
  slug: string
  name: string
  designHtml: string
  bootstrapCodes: string[]
  shadcnCodes: string[]
  minHeight?: number
}

const BASE = import.meta.env.BASE_URL

async function fetchAllIslands(url: string): Promise<string[]> {
  const res = await fetch(url)
  if (!res.ok) return []
  const md = await res.text()
  const { units } = await parseMarkdown(md)
  return units.filter((u) => u.type === 'island').map((u) => u.code)
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
  const [designHtml, bootstrapCodes, shadcnCodes] = await Promise.all([
    fetchDesignHtml(slug),
    fetchAllIslands(`${BASE}catalog/${slug}-rb.md`),
    fetchAllIslands(`${BASE}catalog/${slug}-shadcn.md`),
  ])
  return {
    slug,
    name: slug.replace(/^example-/, '').split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    designHtml,
    bootstrapCodes,
    shadcnCodes,
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
            {current.bootstrapCodes.map((code, i) => (
              <LiveIsland
                key={`bs-${current.slug}-${i}`}
                id={`bs-${current.slug}-${i}`}
                code={code}
                title={i === 0 ? 'Bootstrap' : ''}
                theme="bootstrap"
                minHeight={current.minHeight}
              />
            ))}
            {current.shadcnCodes.map((code, i) => (
              <LiveIsland
                key={`shadcn-${current.slug}-${i}`}
                id={`shadcn-${current.slug}-${i}`}
                code={code}
                title={i === 0 ? 'shadcn/ui' : ''}
                theme="shadcn"
                minHeight={current.minHeight}
              />
            ))}
          </>
        )}
        {isLoading && <div className="loading">로딩 중...</div>}
      </main>
    </div>
  )
}
