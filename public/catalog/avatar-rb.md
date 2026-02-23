# Avatar — Bootstrap

```jsx live
function AvatarExample() {
  const users = [
    { name: '김민준', src: 'https://i.pravatar.cc/150?img=11', online: true },
    { name: '이서연', src: 'https://i.pravatar.cc/150?img=5', online: false },
    { name: '박지호', src: null, online: true },
    { name: '최아린', src: null, online: false },
  ]

  const initials = (name) => name.slice(0, 2)

  const bgColors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>기본 + 이니셜 폴백</p>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {users.map((u, i) => (
            <div key={u.name} className="position-relative" style={{ width: 40, height: 40, flexShrink: 0 }}>
              {u.src
                ? <RB.Image src={u.src} roundedCircle width={40} height={40} style={{ objectFit: 'cover' }} alt={u.name} />
                : (
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: bgColors[i], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8125rem', fontWeight: 600 }}>
                    {initials(u.name)}
                  </div>
                )
              }
              <span
                className="position-absolute bottom-0 end-0"
                style={{ width: 10, height: 10, borderRadius: '50%', background: u.online ? '#22c55e' : '#9ca3af', border: '2px solid #fff' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>크기 변형</p>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {[24, 32, 40, 48, 56].map((size) => (
            <RB.Image key={size} src="https://i.pravatar.cc/150?img=11" roundedCircle width={size} height={size} style={{ objectFit: 'cover' }} alt="avatar" />
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>그룹</p>
        <div style={{ display: 'flex' }}>
          {users.map((u, i) => (
            <div key={u.name} style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #fff', marginLeft: i === 0 ? 0 : -10, overflow: 'hidden', background: bgColors[i], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>
              {u.src
                ? <img src={u.src} width={36} height={36} style={{ objectFit: 'cover', display: 'block' }} alt={u.name} />
                : initials(u.name)
              }
            </div>
          ))}
          <div style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #fff', marginLeft: -10, background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600, color: '#6b7280' }}>
            +8
          </div>
        </div>
      </div>

    </div>
  )
}
```
