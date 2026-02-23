# Empty State — Bootstrap

```jsx live
function EmptyStateExample() {
  const [items, setItems] = React.useState([])

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📭</div>
          <p style={{ fontWeight: 600, fontSize: '1rem', margin: '0 0 0.375rem' }}>항목이 없습니다</p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 1.25rem' }}>
            새 항목을 추가하면 여기에 표시됩니다.
          </p>
          <RB.Button variant="primary" onClick={() => setItems(['김민준', '이서연', '박지호'])}>
            항목 추가
          </RB.Button>
        </div>
      ) : (
        <div>
          {items.map((item, i) => (
            <div key={i} style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>{item}</div>
          ))}
          <RB.Button variant="outline-secondary" size="sm" style={{ marginTop: '1rem' }} onClick={() => setItems([])}>
            초기화
          </RB.Button>
        </div>
      )}
    </div>
  )
}
```
