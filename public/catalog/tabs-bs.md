# Tabs — Bootstrap Utilities

```jsx live
function TabsDemo() {
  const [active, setActive] = React.useState('info')
  const tabs = [
    { value: 'info', label: '정보' },
    { value: 'activity', label: '활동' },
    { value: 'settings', label: '설정', disabled: true },
  ]
  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map(({ value, label, disabled }) => (
          <li key={value} className="nav-item">
            <button
              className={`nav-link${active === value ? ' active' : ''}${disabled ? ' disabled' : ''}`}
              onClick={() => !disabled && setActive(value)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <div className="pt-3" style={{fontSize:'0.875rem'}}>
        {active === 'info' && (
          <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
            <div><strong>이름</strong> 홍길동</div>
            <div><strong>이메일</strong> hong@example.com</div>
            <div><strong>가입일</strong> 2024-01-15</div>
          </div>
        )}
        {active === 'activity' && (
          <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
            <div>마지막 로그인: 2026-02-23</div>
            <div>게시글: 12개</div>
          </div>
        )}
      </div>
    </div>
  )
}
```
