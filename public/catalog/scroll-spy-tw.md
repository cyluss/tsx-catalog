# Scroll Spy — Tailwind Utilities

```jsx live
function ScrollSpyDemo() {
  const containerRef = React.useRef(null)
  const s1 = React.useRef(null)
  const s2 = React.useRef(null)
  const s3 = React.useRef(null)
  const sectionRefs = [s1, s2, s3]
  const labels = ['기본 정보', '주소', '결제']

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    scrollingElement: containerRef,
  })

  const btnBase = 'inline-flex items-center justify-start w-full rounded-md text-sm font-medium h-8 px-3 transition-colors'
  const btnActive = `${btnBase} bg-secondary text-secondary-foreground`
  const btnGhost = `${btnBase} bg-transparent hover:bg-accent hover:text-accent-foreground`

  return (
    <div style={{ display: 'flex', gap: '1rem', height: '220px' }}>
      <nav style={{ width: '100px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {sectionRefs.map((ref, i) => (
          <button
            key={i}
            className={activeSection === i ? btnActive : btnGhost}
            onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            {labels[i]}
          </button>
        ))}
      </nav>
      <div ref={containerRef} style={{ overflowY: 'auto', flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
        {sectionRefs.map((ref, i) => (
          <div key={i} ref={ref} style={{ minHeight: '120px', marginBottom: '0.5rem', paddingBottom: '1rem', borderBottom: i < sectionRefs.length - 1 ? '1px solid #f3f4f6' : undefined }}>
            <strong style={{ fontSize: '0.875rem' }}>{labels[i]}</strong>
            <p style={{ color: '#6b7280', fontSize: '0.8125rem', marginTop: '0.375rem' }}>{labels[i]} 입력 내용이 여기에 표시됩니다.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```
