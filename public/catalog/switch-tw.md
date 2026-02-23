# Switch — Tailwind Utilities

```jsx live
function SwitchDemo() {
  const [s1, setS1] = React.useState(true)
  const [s2, setS2] = React.useState(false)

  const Switch = ({ checked, onChange }) => (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${checked ? 'bg-primary' : 'bg-input'}`}
    >
      <span className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-background shadow-lg transition-transform ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
    </button>
  )

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
      <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
        <Switch checked={s1} onChange={setS1} />
        <label className="text-sm font-medium cursor-pointer" onClick={() => setS1(!s1)}>알림 수신</label>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
        <Switch checked={s2} onChange={setS2} />
        <label className="text-sm font-medium cursor-pointer" onClick={() => setS2(!s2)}>마케팅 정보 수신</label>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
        <button role="switch" aria-checked={false} disabled className="relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent bg-input opacity-50 cursor-not-allowed">
          <span className="pointer-events-none inline-block h-4 w-4 rounded-full bg-background shadow-lg" />
        </button>
        <label className="text-sm font-medium opacity-50">비활성</label>
      </div>
    </div>
  )
}
```
