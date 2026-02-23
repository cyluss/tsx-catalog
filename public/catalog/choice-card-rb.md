# ChoiceCard — Bootstrap

```jsx live
function ChoiceCardExample() {
  const [plan, setPlan] = React.useState('pro')
  const plans = [
    { value: 'free', title: '무료', desc: '월 0원 · 프로젝트 3개' },
    { value: 'pro', title: 'Pro', desc: '월 9,900원 · 무제한' },
  ]
  return (
    <div className="d-flex gap-3">
      {plans.map(p => (
        <label key={p.value} htmlFor={`rb-${p.value}`} className="flex-fill d-flex" style={{cursor:'pointer', margin:0}}>
          <RB.Card className="flex-fill mb-0" border={plan === p.value ? 'primary' : undefined}>
            <RB.Card.Body className="d-flex gap-2 align-items-start">
              <RB.Form.Check
                type="radio" name="plan" id={`rb-${p.value}`}
                label="" className="mt-1"
                checked={plan === p.value}
                onChange={() => setPlan(p.value)}
              />
              <div>
                <RB.Card.Title className="fs-6 mb-0">{p.title}</RB.Card.Title>
                <RB.Card.Text className="text-muted small mb-0">{p.desc}</RB.Card.Text>
              </div>
            </RB.Card.Body>
          </RB.Card>
        </label>
      ))}
    </div>
  )
}
```
