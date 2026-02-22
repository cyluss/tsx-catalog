import { useEffect, useRef, useState } from 'react'

interface Props {
  code: string
  id: string
  title: string
  theme: 'bootstrap' | 'shadcn'
}

export function LiveIsland({ code, id, title, theme }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(120)
  const readyRef = useRef(false)

  // 메시지 리스너는 마운트 시 한 번만 등록 — islandId로 필터링
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
        setHeight(e.data.height)
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [id])

  // code 변경 시 iframe이 이미 ready면 바로 전송
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    iframe.dataset.code = code
    if (readyRef.current) {
      iframe.contentWindow?.postMessage({ type: 'code', islandId: id, code }, '*')
    }
  }, [code, id])

  return (
    <div id={id} className="live-island">
      {title && <div className="live-title">{title}</div>}
      <iframe
        ref={iframeRef}
        src={`/preview-${theme}.html?islandId=${id}`}
        style={{
          width: '100%',
          height: `${height}px`,
          border: '1px solid #e5e7eb',
          borderRadius: '8px 8px 0 0',
          display: 'block',
        }}
      />
      <pre className="live-code"><code>{code}</code></pre>
    </div>
  )
}
