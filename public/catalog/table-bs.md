# Table — Bootstrap Utilities

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
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setEmpty(!empty)}>
          {empty ? '데이터 표시' : '빈 상태 보기'}
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            {cols.map(({ key, label }) => {
              const sortable = key !== 'active'
              const icon = sortKey === key ? (sortDir === 'asc' ? '↑' : '↓') : '↕'
              return (
                <th key={key} scope="col" style={{ cursor: sortable ? 'pointer' : 'default', userSelect: 'none', whiteSpace: 'nowrap' }} onClick={() => handleSort(key)}>
                  {label}{sortable && <span className="ms-1" style={{ color: sortKey === key ? '#212529' : '#adb5bd' }}>{icon}</span>}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={4} className="text-center text-muted py-4">사용자가 없습니다</td></tr>
          ) : rows.map(row => (
            <tr key={row.id} className={selected === row.id ? 'table-active' : ''} style={{ cursor: 'pointer' }} onClick={() => setSelected(selected === row.id ? null : row.id)}>
              <td className="fw-medium">{row.name}</td>
              <td className="text-muted">{row.email}</td>
              <td>{row.role}</td>
              <td><span className={`badge ${row.active ? 'bg-dark' : 'bg-secondary'}`}>{row.active ? '활성' : '비활성'}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```
