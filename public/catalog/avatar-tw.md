# Avatar — Tailwind Utilities

```jsx live
function AvatarDemo() {
  const users = [
    { name: '김민준', src: 'https://i.pravatar.cc/150?img=11', online: true },
    { name: '이서연', src: 'https://i.pravatar.cc/150?img=5', online: false },
    { name: '박지호', src: null, online: true },
    { name: '최아린', src: null, online: false },
  ]
  const initials = (name) => name.slice(0, 2)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>기본 + 이니셜 폴백</p>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {users.map((u) => (
            <div key={u.name} className="relative inline-flex shrink-0">
              <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted items-center justify-content-center">
                {u.src
                  ? <img src={u.src} alt={u.name} className="aspect-square h-full w-full object-cover" />
                  : <span className="text-sm font-medium text-muted-foreground" style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>{initials(u.name)}</span>
                }
              </div>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background" style={{ background: u.online ? '#22c55e' : '#9ca3af' }} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>크기 변형</p>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {[32, 40, 56].map((size) => (
            <div key={size} className="rounded-full bg-muted overflow-hidden flex-shrink-0" style={{ width: size, height: size }}>
              <img src="https://i.pravatar.cc/150?img=11" alt="KM" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>그룹</p>
        <div style={{ display: 'flex' }}>
          {users.map((u, i) => (
            <div key={u.name} className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted border-2 border-background items-center" style={{ marginLeft: i > 0 ? '-0.75rem' : 0, display: 'flex', justifyContent: 'center' }}>
              {u.src
                ? <img src={u.src} alt={u.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <span className="text-xs font-medium text-muted-foreground">{initials(u.name)}</span>
              }
            </div>
          ))}
          <div className="relative flex h-10 w-10 shrink-0 rounded-full bg-muted border-2 border-background text-xs font-medium text-muted-foreground" style={{ marginLeft: '-0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+8</div>
        </div>
      </div>
    </div>
  )
}
```
