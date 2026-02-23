# Table — Bootstrap

```jsx live
function TableExample() {
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
    setSortKey(key)
    setSortDir(dir)
    setData([...data].sort((a, b) =>
      a[key] < b[key] ? (dir === 'asc' ? -1 : 1) : a[key] > b[key] ? (dir === 'asc' ? 1 : -1) : 0
    ))
  }

  const rows = empty ? [] : data

  return (
    <div>
      <div style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
        <RB.Button variant="outline-secondary" size="sm" onClick={() => setEmpty(!empty)}>
          {empty ? '데이터 표시' : '빈 상태 보기'}
        </RB.Button>
      </div>
      <RB.Table striped hover responsive size="sm">
        <thead>
          <tr>
            {cols.map(({ key, label }) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                style={{ cursor: key !== 'active' ? 'pointer' : 'default', userSelect: 'none', whiteSpace: 'nowrap' }}
              >
                {label}
                {key !== 'active' && (
                  <span style={{ marginLeft: '4px', color: sortKey === key ? '#111827' : '#d1d5db' }}>
                    {sortKey === key ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={4}>
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📭</div>
                  <p style={{ fontWeight: 600, margin: '0 0 0.25rem', fontSize: '0.9375rem' }}>사용자가 없습니다</p>
                  <p style={{ color: '#6b7280', fontSize: '0.8125rem', margin: 0 }}>사용자를 초대하면 여기에 표시됩니다.</p>
                </div>
              </td>
            </tr>
          ) : rows.map(row => (
            <tr
              key={row.id}
              onClick={() => setSelected(selected === row.id ? null : row.id)}
              style={{ cursor: 'pointer', background: selected === row.id ? '#eff6ff' : undefined }}
            >
              <td>{row.name}</td>
              <td style={{ color: '#6b7280' }}>{row.email}</td>
              <td>{row.role}</td>
              <td>
                <RB.Badge bg={row.active ? 'success' : 'secondary'}>
                  {row.active ? '활성' : '비활성'}
                </RB.Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </RB.Table>
    </div>
  )
}
```
