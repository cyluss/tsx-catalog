import type { RenderUnit } from '../lib/parseMarkdown'
import { LiveIsland } from './LiveIsland'

interface Props {
  units: RenderUnit[]
  theme: 'bootstrap' | 'shadcn'
}

export function MarkdownRenderer({ units, theme }: Props) {
  return (
    <div className="markdown-body">
      {units.map((unit, i) => {
        if (unit.type === 'island') {
          return <LiveIsland key={unit.id} code={unit.code} id={unit.id} title={unit.title} theme={theme} />
        }
        return (
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: unit.html }}
          />
        )
      })}
    </div>
  )
}
