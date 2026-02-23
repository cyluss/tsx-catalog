# Popover — Bootstrap

```jsx live
function PopoverExample() {
  const popover = (
    <RB.Popover id="popover-basic">
      <RB.Popover.Header as="h3">배포 정보</RB.Popover.Header>
      <RB.Popover.Body>
        <div><strong>버전</strong> v2.4.1</div>
        <div><strong>배포일</strong> 2026-02-23</div>
        <div><strong>배포자</strong> 김개발</div>
      </RB.Popover.Body>
    </RB.Popover>
  )
  return (
    <RB.OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose>
      <RB.Button variant="outline-secondary">배포 정보 보기</RB.Button>
    </RB.OverlayTrigger>
  )
}
```
