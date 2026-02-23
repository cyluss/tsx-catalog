# ChoiceCard — Bootstrap Utilities

```jsx live
function ChoiceCardDemo() {
  const [plan, setPlan] = React.useState('pro')
  const plans = [
    { value: 'free', title: '무료', desc: '월 0원 · 프로젝트 3개' },
    { value: 'pro', title: 'Pro', desc: '월 9,900원 · 무제한' },
  ]
  return (
    <div className="d-flex gap-3">
      {plans.map(({ value, title, desc }) => {
        const active = plan === value
        const cls = `d-flex align-items-start gap-2 border rounded p-3 flex-fill${active ? ' border-dark bg-light' : ''}`
        return (
          <label key={value} className={cls} style={{cursor:'pointer'}}>
            <input type="radio" name="bs-plan" value={value} checked={active} onChange={() => setPlan(value)} className="mt-1" />
            <div>
              <div className="fw-medium" style={{fontSize:'0.875rem'}}>{title}</div>
              <div className="text-muted" style={{fontSize:'0.875rem'}}>{desc}</div>
            </div>
          </label>
        )
      })}
    </div>
  )
}
```
