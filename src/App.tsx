import { useEffect, useState } from 'react'
import { parseMarkdown } from './lib/parseMarkdown'
import { LiveIsland } from './components/LiveIsland'

type ComponentEntry = {
  name: string
  designHtml: string
  bootstrapCode: string
  shadcnCode: string
  minHeight?: number
}

async function fetchFirstIsland(url: string): Promise<string> {
  const res = await fetch(url)
  if (!res.ok) return ''
  const md = await res.text()
  const { units } = await parseMarkdown(md)
  return units.find((u) => u.type === 'island')?.code ?? ''
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
}

async function loadComponent(slug: string): Promise<ComponentEntry> {
  const [designHtml, bootstrapCode, shadcnCode] = await Promise.all([
    fetchDesignHtml(slug),
    fetchFirstIsland(`/catalog/${slug}-rb.md`),
    fetchFirstIsland(`/catalog/${slug}-shadcn.md`),
  ])
  return {
    name: slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    designHtml,
    bootstrapCode,
    shadcnCode,
    minHeight: MIN_HEIGHTS[slug],
  }
}

function getHash() {
  return decodeURIComponent(location.hash.slice(1))
}

export default function App() {
  const [components, setComponents] = useState<ComponentEntry[]>([])
  const [selected, setSelected] = useState<string>(getHash)

  useEffect(() => {
    fetch('/catalog/index.json')
      .then((r) => r.json())
      .then((slugs: string[]) => Promise.all(slugs.map(loadComponent)))
      .then((entries) => {
        setComponents(entries)
        const hash = getHash()
        const match = entries.find((e) => e.name.toLowerCase() === hash.toLowerCase())
        setSelected(match ? match.name : entries[0]?.name ?? '')
      })
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = getHash()
      setComponents((prev) => {
        const match = prev.find((e) => e.name.toLowerCase() === hash.toLowerCase())
        if (match) setSelected(match.name)
        return prev
      })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const current = components.find((c) => c.name === selected)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav className="sidebar">
        <ul>
          {components.map((c) => (
            <li key={c.name}>
              <a
                href={`#${c.name.toLowerCase()}`}
                className={selected === c.name ? 'active' : ''}
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        {current && (
          <>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              {current.name}
            </h2>
            {current.designHtml && (
              <div className="design-body" dangerouslySetInnerHTML={{ __html: current.designHtml }} style={{ marginBottom: '2rem' }} />
            )}
            <LiveIsland
              key={`bs-${current.name}`}
              id={`bs-${current.name}`}
              code={current.bootstrapCode}
              title="Bootstrap"
              theme="bootstrap"
              minHeight={current.minHeight}
            />
            <LiveIsland
              key={`shadcn-${current.name}`}
              id={`shadcn-${current.name}`}
              code={current.shadcnCode}
              title="shadcn/ui"
              theme="shadcn"
              minHeight={current.minHeight}
            />
          </>
        )}
        {components.length === 0 && <div className="loading">로딩 중...</div>}
      </main>
    </div>
  )
}
