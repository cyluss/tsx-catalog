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

async function fetchAllIslands(url: string): Promise<string[]> {
  const res = await fetch(url)
  if (!res.ok) return []
  const md = await res.text()
  const { units } = await parseMarkdown(md)
  return units.filter((u) => u.type === 'island').map((u) => u.code)
}

async function fetchDesignHtml(slug: string): Promise<string> {
  const res = await fetch(`/catalog/${slug}.md`)
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
    fetchAllIslands(`/catalog/${slug}-rb.md`),
    fetchAllIslands(`/catalog/${slug}-shadcn.md`),
  ])
  return {
    slug,
    name: slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    designHtml,
    bootstrapCodes,
    shadcnCodes,
    minHeight: MIN_HEIGHTS[slug],
  }
}

function getHash() {
  return decodeURIComponent(location.hash.slice(1))
}

export default function App() {
  const [components, setComponents] = useState<ComponentEntry[]>([])
  const [selected, setSelected] = useState<string>(getHash)
  const [homeHtml, setHomeHtml] = useState<string>('')

  useEffect(() => {
    fetchDesignHtml('home').then(setHomeHtml)
  }, [])

  useEffect(() => {
    fetch('/catalog/index.json')
      .then((r) => r.json())
      .then((slugs: string[]) => Promise.all(slugs.map(loadComponent)))
      .then((entries) => {
        setComponents(entries)
        const hash = getHash()
        const match = entries.find((e) => e.slug === hash)
        setSelected(match ? match.slug : '')
      })
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = getHash()
      setComponents((prev) => {
        const match = prev.find((e) => e.slug === hash)
        setSelected(match ? match.slug : '')
        return prev
      })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const current = components.find((c) => c.slug === selected)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav className="sidebar">
        <a href="#" className={selected === '' ? 'sidebar-home active' : 'sidebar-home'}>홈</a>
        <ul>
          {components.map((c) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className={selected === c.slug ? 'active' : ''}
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
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
                key={`bs-${current.name}-${i}`}
                id={`bs-${current.name}-${i}`}
                code={code}
                title={i === 0 ? 'Bootstrap' : ''}
                theme="bootstrap"
                minHeight={current.minHeight}
              />
            ))}
            {current.shadcnCodes.map((code, i) => (
              <LiveIsland
                key={`shadcn-${current.name}-${i}`}
                id={`shadcn-${current.name}-${i}`}
                code={code}
                title={i === 0 ? 'shadcn/ui' : ''}
                theme="shadcn"
                minHeight={current.minHeight}
              />
            ))}
          </>
        )}
        {components.length === 0 && <div className="loading">로딩 중...</div>}
      </main>
    </div>
  )
}
