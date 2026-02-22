import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import type { Root, Code, Heading, RootContent } from 'mdast'

export type RenderUnit =
  | { type: 'island'; code: string; id: string; title: string }
  | { type: 'html'; html: string }

export interface NavItem {
  id: string
  text: string
  level: number
}

export interface ParseResult {
  units: RenderUnit[]
  nav: NavItem[]
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w가-힣-]/g, '')
}

export async function parseMarkdown(markdown: string): Promise<ParseResult> {
  const processor = remark().use(remarkGfm)
  const tree = processor.parse(markdown) as Root

  const nav: NavItem[] = []
  const units: RenderUnit[] = []

  // 헤딩 수집
  visit(tree, 'heading', (node: Heading) => {
    const text = node.children
      .filter((c) => c.type === 'text')
      .map((c) => (c as { value: string }).value)
      .join('')
    const id = slugify(text)
    nav.push({ id, text, level: node.depth })
  })

  // 노드를 순서대로 처리: island / html 단위로 분리
  let htmlBuffer: RootContent[] = []
  let islandIndex = 0
  let lastHeading = ''

  const flushHtml = async () => {
    if (htmlBuffer.length === 0) return
    const subtree: Root = { type: 'root', children: htmlBuffer }

    const processor = unified()
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)

    const hast = await processor.run(subtree as never)
    const html = String(processor.stringify(hast as never))

    units.push({ type: 'html', html })
    htmlBuffer = []
  }

  for (const node of tree.children) {
    if (
      node.type === 'code' &&
      (node as Code).lang === 'jsx' &&
      (node as Code).meta === 'live'
    ) {
      await flushHtml()
      units.push({
        type: 'island',
        code: (node as Code).value,
        id: `island-${islandIndex++}`,
        title: lastHeading,
      })
    } else {
      // 헤딩 텍스트 추적 (island title용)
      if (node.type === 'heading') {
        lastHeading = (node as Heading).children
          .filter((c) => c.type === 'text')
          .map((c) => (c as { value: string }).value)
          .join('')
      }
      // 헤딩에 id 주입
      if (node.type === 'heading') {
        const heading = node as Heading
        const text = heading.children
          .filter((c) => c.type === 'text')
          .map((c) => (c as { value: string }).value)
          .join('')
        const id = slugify(text)
        // data.hProperties로 rehype에 id 전달
        ;(heading as unknown as Record<string, unknown>).data = {
          id,
          hProperties: { id },
        }
      }
      htmlBuffer.push(node)
    }
  }
  await flushHtml()

  return { units, nav }
}
