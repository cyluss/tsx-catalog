import { useContext, useEffect, useRef, useState } from 'react'
import { LiveProvider, LiveEditor, LiveContext } from 'react-live'

interface Props {
  code: string
  id: string
  title: string
  theme: 'bootstrap' | 'shadcn'
  minHeight?: number
}

function EditorSync({ islandId, iframeRef, readyRef }: {
  islandId: string
  iframeRef: React.RefObject<HTMLIFrameElement | null>
  readyRef: React.RefObject<boolean>
}) {
  const { code } = useContext(LiveContext)
  useEffect(() => {
    if (!iframeRef.current) return
    iframeRef.current.dataset.code = code
    if (readyRef.current) {
      iframeRef.current.contentWindow?.postMessage({ type: 'code', islandId, code }, '*')
    }
  }, [code]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <LiveEditor
      style={{ fontFamily: 'ui-monospace, monospace', fontSize: '11px', lineHeight: 1.6, flex: 1 }}
    />
  )
}

export function LiveIsland({ code, id, title, theme, minHeight = 120 }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(minHeight)
  const readyRef = useRef(false)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const onMessage = (e: MessageEvent) => {
      if (e.data?.islandId !== id) return
      if (e.data?.type === 'ready') {
        readyRef.current = true
        iframe.contentWindow?.postMessage({ type: 'code', islandId: id, code: iframe.dataset.code }, '*')
      }
      if (e.data?.type === 'height') {
        setHeight((prev) => Math.max(prev, e.data.height))
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [id])

  return (
    <div id={id} className="live-island">
      {title && <div className="live-title">{title}</div>}
      <div style={{ display: 'flex', alignItems: 'flex-start', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ flex: 1, borderRight: '1px solid #e5e7eb', minHeight: `${height}px`, background: 'rgb(1, 22, 39)' }}>
          <LiveProvider key={id} code={code} noInline={false}>
            <EditorSync islandId={id} iframeRef={iframeRef} readyRef={readyRef} />
          </LiveProvider>
        </div>
        <iframe
          ref={iframeRef}
          src={`${import.meta.env.BASE_URL}preview-${theme}.html?islandId=${id}`}
          style={{ flex: 1, border: 'none', display: 'block', height: `${height}px` }}
        />
      </div>
    </div>
  )
}
