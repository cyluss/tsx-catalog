# Scroll Spy — Bootstrap

```jsx live
function ScrollSpyExample() {
  const [active, setActive] = React.useState('spy-s1')
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

  const sections = ['spy-s1', 'spy-s2', 'spy-s3']
  const labels = ['기본 정보', '주소', '결제']

  return (
    <div style={{ display: 'flex', gap: '1rem', height: '220px' }}>
      <RB.Nav className="flex-column" variant="pills" activeKey={active} style={{ width: '100px', flexShrink: 0 }}>
        {sections.map((id, i) => (
          <RB.Nav.Link
            key={id}
            eventKey={id}
            style={{ cursor: 'pointer', padding: '0.25rem 0.5rem', fontSize: '0.8125rem' }}
            onClick={() => containerRef.current?.querySelector(`[data-section="${id}"]`)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {labels[i]}
          </RB.Nav.Link>
        ))}
      </RB.Nav>
      <div
        ref={containerRef}
        style={{ overflowY: 'auto', flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
      >
        {sections.map((id, i) => (
          <div
            key={id}
            data-section={id}
            style={{ minHeight: '160px', marginBottom: '0.5rem', paddingBottom: '1rem', borderBottom: i < sections.length - 1 ? '1px solid #f3f4f6' : undefined }}
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
