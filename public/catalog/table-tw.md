# Table — Tailwind Utilities

```jsx live
function TableDemo() {
  const initialData = [
    { id: 1, name: '김민준', email: 'minjun@example.com', role: '관리자', active: true },
    { id: 2, name: '이서연', email: 'seoyeon@example.com', role: '편집자', active: true },
    { id: 3, name: '박지호', email: 'jiho@example.com', role: '뷰어', active: false },
    { id: 4, name: '최아린', email: 'arin@example.com', role: '편집자', active: true },
  ]
  const [data, setData] = React.useState(initialData)
  const [sortKey, setSortKey] = React.useState(null)
  const [sortDir, setSortDir] = React.useState('asc')
  const [selected, setSelected] = React.useState(null)
  const [empty, setEmpty] = React.useState(false)

  const cols = [
    { key: 'name', label: '이름' },
    { key: 'email', label: '이메일' },
    { key: 'role', label: '역할' },
    { key: 'active', label: '상태' },
  ]

  const handleSort = (key) => {
    if (key === 'active') return
    const dir = sortKey === key && sortDir === 'asc' ? 'desc' : 'asc'
    setSortKey(key); setSortDir(dir)
    setData([...data].sort((a, b) => a[key] < b[key] ? (dir==='asc'?-1:1) : a[key] > b[key] ? (dir==='asc'?1:-1) : 0))
  }

  const rows = empty ? [] : data

  return (
    <div>
      <div style={{ marginBottom: '0.75rem' }}>
        <button className="inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-8 px-3 hover:bg-accent transition-all" onClick={() => setEmpty(!empty)}>
          {empty ? '데이터 표시' : '빈 상태 보기'}
        </button>
      </div>
      <div className="w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="border-b border-border">
            <tr>
              {cols.map(({ key, label }) => {
                const sortable = key !== 'active'
                const icon = sortKey === key ? (sortDir === 'asc' ? '↑' : '↓') : '↕'
                return (
                  <th key={key} className="h-10 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap" style={{ cursor: sortable ? 'pointer' : 'default', userSelect: 'none' }} onClick={() => handleSort(key)}>
                    {label}{sortable && <span className="ml-1" style={{ color: sortKey === key ? '#111827' : '#d1d5db' }}>{icon}</span>}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {rows.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-sm text-muted-foreground">사용자가 없습니다</td></tr>
            ) : rows.map(row => {
              const cls = `border-b border-border transition-colors hover:bg-muted/50 cursor-pointer${selected === row.id ? ' bg-accent' : ''}`
              return (
                <tr key={row.id} className={cls} onClick={() => setSelected(selected === row.id ? null : row.id)}>
                  <td className="p-4 align-middle font-medium">{row.name}</td>
                  <td className="p-4 align-middle text-muted-foreground">{row.email}</td>
                  <td className="p-4 align-middle">{row.role}</td>
                  <td className="p-4 align-middle">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${row.active ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {row.active ? '활성' : '비활성'}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```
