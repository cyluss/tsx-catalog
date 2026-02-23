# Scroll Spy — Bootstrap

```jsx live
function ScrollSpyExample() {
  const containerRef = React.useRef(null)
  const s1 = React.useRef(null)
  const s2 = React.useRef(null)
  const s3 = React.useRef(null)
  const sectionRefs = [s1, s2, s3]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    scrollingElement: containerRef,
  })

  const labels = ['기본 정보', '주소', '결제']

  return (
    <div style={{ display: 'flex', gap: '1rem', height: '220px' }}>
      <RB.Nav className="flex-column" variant="pills" activeKey={activeSection} style={{ width: '100px', flexShrink: 0 }}>
        {sectionRefs.map((ref, i) => (
          <RB.Nav.Link
            key={i}
            eventKey={i}
            style={{ cursor: 'pointer', padding: '0.25rem 0.5rem', fontSize: '0.8125rem' }}
            onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            {labels[i]}
          </RB.Nav.Link>
        ))}
      </RB.Nav>
      <div
        ref={containerRef}
        style={{ overflowY: 'auto', flex: 1, border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}
      >
        {sectionRefs.map((ref, i) => (
          <div
            key={i}
            ref={ref}
            style={{ minHeight: '160px', marginBottom: '0.5rem', paddingBottom: '1rem', borderBottom: i < sectionRefs.length - 1 ? '1px solid #f3f4f6' : undefined }}
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
