# Empty State — Tailwind Utilities

```jsx live
function EmptyStateDemo() {
  const [items, setItems] = React.useState([])
  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  )
  return (
    <div>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground mb-4">
            {icon}
          </div>
          <h3 className="text-sm font-medium mb-1">항목이 없습니다</h3>
          <p className="text-sm text-muted-foreground mb-4">새 항목을 추가하면 여기에 표시됩니다.</p>
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-medium h-9 px-4 hover:bg-primary/90 transition-all" onClick={() => setItems(['김민준', '이서연', '박지호'])}>
            항목 추가
          </button>
        </div>
      ) : (
        <div>
          {items.map((item, i) => (
            <div key={i} className="py-3 border-b border-border text-sm">{item}</div>
          ))}
          <button className="inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-8 px-3 mt-4 hover:bg-accent transition-all" onClick={() => setItems([])}>
            초기화
          </button>
        </div>
      )}
    </div>
  )
}
```
