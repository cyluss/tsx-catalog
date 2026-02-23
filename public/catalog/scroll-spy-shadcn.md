# Scroll Spy — shadcn/ui

```jsx live
function ScrollSpyExample() {
  const [active, setActive] = React.useState('section-1')
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const sections = container.querySelectorAll('[data-section]')
    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.dataset.section, e.intersectionRatio))
        const best = [...ratios.entries()].reduce((a, b) => a[1] >= b[1] ? a : b)
        setActive(best[0])
      },
      { root: container, threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const sections = ['section-1', 'section-2', 'section-3']
  const labels = ['기본 정보', '주소', '결제']

  return (
    <div style={{ display: 'flex', gap: '1rem', height: '220px' }}>
      <nav style={{ width: '100px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {sections.map((id, i) => (
          <Shad.Button
            key={id}
            variant={active === id ? 'secondary' : 'ghost'}
            size="sm"
            style={{ justifyContent: 'flex-start', fontSize: '0.8125rem' }}
            onClick={() => {
              containerRef.current?.querySelector(`[data-section="${id}"]`)?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {labels[i]}
          </Shad.Button>
        ))}
      </nav>
      <div
        ref={containerRef}
        style={{ overflowY: 'auto', flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
      >
        {sections.map((id, i) => (
          <div
            key={id}
            data-section={id}
            style={{ minHeight: '120px', marginBottom: '0.5rem', paddingBottom: '1rem', borderBottom: i < sections.length - 1 ? '1px solid #f3f4f6' : undefined }}
          >
            <strong style={{ fontSize: '0.875rem' }}>{labels[i]}</strong>
            <p style={{ color: '#6b7280', fontSize: '0.8125rem', marginTop: '0.375rem' }}>{labels[i]} 입력 내용이 여기에 표시됩니다.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```
