# Scroll Spy — Bootstrap Utilities

```jsx live
function ScrollSpyDemo() {
  const containerRef = React.useRef(null)
  const s1 = React.useRef(null)
  const s2 = React.useRef(null)
  const s3 = React.useRef(null)
  const sectionRefs = [s1, s2, s3]
  const labels = ['기본 정보', '주소', '결제']
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const handler = () => {
      const containerTop = container.getBoundingClientRect().top
      let found = 0
      sectionRefs.forEach((ref, i) => {
        if (ref.current && ref.current.getBoundingClientRect().top - containerTop <= 10) found = i
      })
      setActive(found)
    }
    container.addEventListener('scroll', handler)
    return () => container.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="d-flex gap-3" style={{ height: '220px' }}>
      <nav className="d-flex flex-column gap-1" style={{ width: '100px', flexShrink: 0 }}>
        {sectionRefs.map((ref, i) => (
          <button
            key={i}
            className={`btn btn-sm text-start${active === i ? ' btn-secondary' : ' btn-link text-dark text-decoration-none'}`}
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
