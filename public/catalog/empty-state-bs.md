# Empty State — Bootstrap Utilities

```jsx live
function EmptyStateDemo() {
  const [items, setItems] = React.useState([])
  return (
    <div>
      {items.length === 0 ? (
        <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center">
          <div className="d-flex align-items-center justify-content-center rounded-circle bg-light text-secondary mb-3" style={{width:48,height:48}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </div>
          <h6 className="mb-1">항목이 없습니다</h6>
          <p className="text-muted mb-3" style={{fontSize:'0.875rem'}}>새 항목을 추가하면 여기에 표시됩니다.</p>
          <button className="btn btn-dark" onClick={() => setItems(['김민준', '이서연', '박지호'])}>항목 추가</button>
        </div>
      ) : (
        <div>
          {items.map((item, i) => (
            <div key={i} className="py-2 border-bottom" style={{fontSize:'0.875rem'}}>{item}</div>
          ))}
          <button className="btn btn-outline-secondary btn-sm mt-3" onClick={() => setItems([])}>초기화</button>
        </div>
      )}
    </div>
  )
}
```
