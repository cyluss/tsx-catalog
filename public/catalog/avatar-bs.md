# Avatar — Bootstrap Utilities

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
        <p className="text-uppercase fw-bold text-secondary mb-2" style={{fontSize:'0.75rem',letterSpacing:'0.08em'}}>기본 + 이니셜 폴백</p>
        <div className="d-flex gap-2 align-items-center">
          {users.map((u) => (
            <div key={u.name} className="position-relative d-inline-flex">
              <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center overflow-hidden" style={{width:40,height:40}}>
                {u.src
                  ? <img src={u.src} alt={u.name} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                  : <span className="text-white fw-medium" style={{fontSize:'0.75rem'}}>{initials(u.name)}</span>
                }
              </div>
              <span className="position-absolute bottom-0 end-0 rounded-circle border border-2 border-white" style={{width:10,height:10,background:u.online?'#22c55e':'#9ca3af'}} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-uppercase fw-bold text-secondary mb-2" style={{fontSize:'0.75rem',letterSpacing:'0.08em'}}>크기 변형</p>
        <div className="d-flex gap-2 align-items-center">
          {[32, 40, 56].map((size) => (
            <div key={size} className="rounded-circle overflow-hidden bg-secondary flex-shrink-0" style={{width:size,height:size}}>
              <img src="https://i.pravatar.cc/150?img=11" alt="KM" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-uppercase fw-bold text-secondary mb-2" style={{fontSize:'0.75rem',letterSpacing:'0.08em'}}>그룹</p>
        <div className="d-flex">
          {users.map((u, i) => (
            <div key={u.name} className="rounded-circle bg-secondary d-flex align-items-center justify-content-center overflow-hidden border border-2 border-white flex-shrink-0" style={{width:40,height:40,marginLeft:i>0?'-12px':0}}>
              {u.src
                ? <img src={u.src} alt={u.name} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                : <span className="text-white fw-medium" style={{fontSize:'0.75rem'}}>{initials(u.name)}</span>
              }
            </div>
          ))}
          <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center border border-2 border-white text-white fw-medium flex-shrink-0" style={{width:40,height:40,marginLeft:'-12px',fontSize:'0.75rem'}}>+8</div>
        </div>
      </div>
    </div>
  )
}
```
