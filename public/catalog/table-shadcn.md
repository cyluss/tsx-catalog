# Table — shadcn/ui

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
      <div style={{ marginBottom: '0.75rem' }}>
        <Shad.Button variant="outline" size="sm" onClick={() => setEmpty(!empty)}>
          {empty ? '데이터 표시' : '빈 상태 보기'}
        </Shad.Button>
      </div>
      <Shad.Table>
        <Shad.TableHeader>
          <Shad.TableRow>
            {cols.map(({ key, label }) => (
              <Shad.TableHead
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
              </Shad.TableHead>
            ))}
          </Shad.TableRow>
        </Shad.TableHeader>
        <Shad.TableBody>
          {rows.length === 0 ? (
            <Shad.TableRow>
              <Shad.TableCell colSpan={4}>
                <Shad.Empty>
                  <Shad.EmptyHeader>
                    <Shad.EmptyMedia variant="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </Shad.EmptyMedia>
                    <Shad.EmptyTitle>사용자가 없습니다</Shad.EmptyTitle>
                    <Shad.EmptyDescription>사용자를 초대하면 여기에 표시됩니다.</Shad.EmptyDescription>
                  </Shad.EmptyHeader>
                </Shad.Empty>
              </Shad.TableCell>
            </Shad.TableRow>
          ) : rows.map(row => (
            <Shad.TableRow
              key={row.id}
              onClick={() => setSelected(selected === row.id ? null : row.id)}
              style={{ cursor: 'pointer', background: selected === row.id ? 'hsl(var(--accent))' : undefined }}
            >
              <Shad.TableCell style={{ fontWeight: 500 }}>{row.name}</Shad.TableCell>
              <Shad.TableCell style={{ color: 'hsl(var(--muted-foreground))' }}>{row.email}</Shad.TableCell>
              <Shad.TableCell>{row.role}</Shad.TableCell>
              <Shad.TableCell>
                <Shad.Badge variant={row.active ? 'default' : 'secondary'}>
                  {row.active ? '활성' : '비활성'}
                </Shad.Badge>
              </Shad.TableCell>
            </Shad.TableRow>
          ))}
        </Shad.TableBody>
      </Shad.Table>
    </div>
  )
}
```
