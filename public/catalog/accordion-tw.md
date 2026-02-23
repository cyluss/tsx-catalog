# Accordion — Tailwind Utilities

```jsx live
function AccordionDemo() {
  const faqs = [
    { value: 'item-1', q: '무료로 사용할 수 있나요?', a: '기본 플랜은 무료입니다. 팀 협업, 고급 분석 등 추가 기능은 Pro 플랜에서 제공됩니다.' },
    { value: 'item-2', q: '데이터는 어디에 저장되나요?', a: '모든 데이터는 국내 데이터센터에 암호화되어 저장됩니다. SOC 2 Type II 인증을 받았습니다.' },
    { value: 'item-3', q: '언제든지 해지할 수 있나요?', a: '네, 언제든지 설정에서 구독을 해지할 수 있습니다. 해지 후에도 결제 기간 종료까지 서비스를 이용할 수 있습니다.' },
    { value: 'item-4', q: '팀 멤버를 몇 명까지 초대할 수 있나요?', a: '무료 플랜은 최대 3명, Pro 플랜은 무제한으로 초대할 수 있습니다.' },
  ]
  const [open, setOpen] = React.useState('item-1')
  return (
    <div className="w-full">
      {faqs.map(({ value, q, a }) => (
        <div key={value} className="border-b border-border">
          <button
            className="flex w-full items-center justify-between py-4 text-sm font-medium text-left hover:underline"
            onClick={() => setOpen(open === value ? null : value)}
          >
            {q}
            <span style={{ transition: 'transform 0.2s', transform: open === value ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: '0.5rem' }}>↓</span>
          </button>
          {open === value && (
            <div className="pb-4 text-sm text-muted-foreground">{a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
```
