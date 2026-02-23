# Empty State — shadcn/ui

```jsx live
function EmptyStateExample() {
  const [items, setItems] = React.useState([])

  return (
    <div>
      {items.length === 0 ? (
        <Shad.Empty>
          <Shad.EmptyHeader>
            <Shad.EmptyMedia variant="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </Shad.EmptyMedia>
            <Shad.EmptyTitle>항목이 없습니다</Shad.EmptyTitle>
            <Shad.EmptyDescription>새 항목을 추가하면 여기에 표시됩니다.</Shad.EmptyDescription>
          </Shad.EmptyHeader>
          <Shad.EmptyContent>
            <Shad.Button onClick={() => setItems(['김민준', '이서연', '박지호'])}>
              항목 추가
            </Shad.Button>
          </Shad.EmptyContent>
        </Shad.Empty>
      ) : (
        <div>
          {items.map((item, i) => (
            <div key={i} style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>{item}</div>
          ))}
          <Shad.Button variant="outline" size="sm" style={{ marginTop: '1rem' }} onClick={() => setItems([])}>
            초기화
          </Shad.Button>
        </div>
      )}
    </div>
  )
}
```
