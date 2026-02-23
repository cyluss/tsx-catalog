# ChoiceCard — Tailwind Utilities

```jsx live
function ChoiceCardDemo() {
  const [plan, setPlan] = React.useState('pro')
  const plans = [
    { value: 'free', title: '무료', desc: '월 0원 · 프로젝트 3개' },
    { value: 'pro', title: 'Pro', desc: '월 9,900원 · 무제한' },
  ]
  return (
    <div style={{display:'flex', gap:'12px'}}>
      {plans.map(({ value, title, desc }) => {
        const active = plan === value
        const cls = `flex items-start gap-3 rounded-lg border p-4 cursor-pointer transition-colors ${active ? 'border-primary bg-accent' : 'border-border hover:bg-muted/50'}`
        return (
          <label key={value} className={cls} style={{flex:1}}>
            <input type="radio" name="tw-plan" value={value} checked={active} onChange={() => setPlan(value)} className="mt-0.5 accent-primary" />
            <div>
              <div className="text-sm font-medium">{title}</div>
              <div className="text-sm text-muted-foreground">{desc}</div>
            </div>
          </label>
        )
      })}
    </div>
  )
}
```
