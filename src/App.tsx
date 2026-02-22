import { useEffect, useState } from 'react'
import { parseMarkdown } from './lib/parseMarkdown'
import { LiveIsland } from './components/LiveIsland'

type ComponentEntry = {
  name: string
  bootstrapCode: string
  shadcnCode: string
}

async function loadComponent(slug: string): Promise<ComponentEntry> {
  const md = await fetch(`/catalog/${slug}.md`).then((r) => r.text())
  const { units } = await parseMarkdown(md)
  const islands = units.filter((u) => u.type === 'island')
  const bootstrap = islands.find((u) => u.title === 'Bootstrap')
  const shadcn = islands.find((u) => u.title === 'shadcn')
  return {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    bootstrapCode: bootstrap?.code ?? '',
    shadcnCode: shadcn?.code ?? '',
  }
}

export default function App() {
  const [components, setComponents] = useState<ComponentEntry[]>([])
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    fetch('/catalog/index.json')
      .then((r) => r.json())
      .then((slugs: string[]) => Promise.all(slugs.map(loadComponent)))
      .then((entries) => {
        setComponents(entries)
        if (entries.length > 0) setSelected(entries[0].name)
      })
  }, [])

  const current = components.find((c) => c.name === selected)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav className="sidebar">
        <ul>
          {components.map((c) => (
            <li key={c.name}>
              <a
                href="#"
                className={selected === c.name ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setSelected(c.name) }}
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
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              {current.name}
            </h2>
            <LiveIsland
              key={`bs-${current.name}`}
              id={`bs-${current.name}`}
              code={current.bootstrapCode}
              title="Bootstrap"
              theme="bootstrap"
            />
            <LiveIsland
              key={`shadcn-${current.name}`}
              id={`shadcn-${current.name}`}
              code={current.shadcnCode}
              title="shadcn/ui"
              theme="shadcn"
            />
          </>
        )}
        {components.length === 0 && <div className="loading">로딩 중...</div>}
      </main>
    </div>
  )
}
