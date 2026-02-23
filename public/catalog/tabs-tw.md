# Tabs — Tailwind Utilities

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
      <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
        {tabs.map(({ value, label, disabled }) => {
          const cls = `inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 ${active === value ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50'}`
          return (
            <button key={value} className={cls} disabled={disabled} onClick={() => !disabled && setActive(value)}>
              {label}
            </button>
          )
        })}
      </div>
      <div className="mt-2 text-sm">
        {active === 'info' && (
          <div style={{padding:'1rem 0', display:'flex', flexDirection:'column', gap:'4px'}}>
            <div><strong>이름</strong> 홍길동</div>
            <div><strong>이메일</strong> hong@example.com</div>
            <div><strong>가입일</strong> 2024-01-15</div>
          </div>
        )}
        {active === 'activity' && (
          <div style={{padding:'1rem 0', display:'flex', flexDirection:'column', gap:'4px'}}>
            <div>마지막 로그인: 2026-02-23</div>
            <div>게시글: 12개</div>
          </div>
        )}
      </div>
    </div>
  )
}
```
