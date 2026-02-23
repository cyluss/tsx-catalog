# Accordion — Bootstrap

```jsx live
function AccordionExample() {
  const faqs = [
    {
      key: '0',
      q: '무료로 사용할 수 있나요?',
      a: '기본 플랜은 무료입니다. 팀 협업, 고급 분석 등 추가 기능은 Pro 플랜에서 제공됩니다.',
    },
    {
      key: '1',
      q: '데이터는 어디에 저장되나요?',
      a: '모든 데이터는 국내 데이터센터에 암호화되어 저장됩니다. SOC 2 Type II 인증을 받았습니다.',
    },
    {
      key: '2',
      q: '언제든지 해지할 수 있나요?',
      a: '네, 언제든지 설정에서 구독을 해지할 수 있습니다. 해지 후에도 결제 기간 종료까지 서비스를 이용할 수 있습니다.',
    },
    {
      key: '3',
      q: '팀 멤버를 몇 명까지 초대할 수 있나요?',
      a: '무료 플랜은 최대 3명, Pro 플랜은 무제한으로 초대할 수 있습니다.',
    },
  ]

  return (
    <RB.Accordion defaultActiveKey="0">
      {faqs.map(({ key, q, a }) => (
        <RB.Accordion.Item key={key} eventKey={key}>
          <RB.Accordion.Header>{q}</RB.Accordion.Header>
          <RB.Accordion.Body style={{ color: '#6b7280', fontSize: '0.9375rem' }}>{a}</RB.Accordion.Body>
        </RB.Accordion.Item>
      ))}
    </RB.Accordion>
  )
}
```
