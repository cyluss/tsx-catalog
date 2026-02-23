# Avatar — shadcn/ui

```jsx live
function AvatarExample() {
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
            <Shad.Avatar key={u.name}>
              {u.src && <Shad.AvatarImage src={u.src} alt={u.name} />}
              <Shad.AvatarFallback>{initials(u.name)}</Shad.AvatarFallback>
              <Shad.AvatarBadge style={{ background: u.online ? '#22c55e' : '#9ca3af' }} />
            </Shad.Avatar>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>크기 변형</p>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Shad.Avatar size="sm"><Shad.AvatarImage src="https://i.pravatar.cc/150?img=11" /><Shad.AvatarFallback>KM</Shad.AvatarFallback></Shad.Avatar>
          <Shad.Avatar><Shad.AvatarImage src="https://i.pravatar.cc/150?img=11" /><Shad.AvatarFallback>KM</Shad.AvatarFallback></Shad.Avatar>
          <Shad.Avatar size="lg"><Shad.AvatarImage src="https://i.pravatar.cc/150?img=11" /><Shad.AvatarFallback>KM</Shad.AvatarFallback></Shad.Avatar>
        </div>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>그룹</p>
        <Shad.AvatarGroup>
          {users.map((u) => (
            <Shad.Avatar key={u.name}>
              {u.src && <Shad.AvatarImage src={u.src} alt={u.name} />}
              <Shad.AvatarFallback>{initials(u.name)}</Shad.AvatarFallback>
            </Shad.Avatar>
          ))}
          <Shad.AvatarGroupCount>+8</Shad.AvatarGroupCount>
        </Shad.AvatarGroup>
      </div>

    </div>
  )
}
```
