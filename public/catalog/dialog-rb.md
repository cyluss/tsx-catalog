# Dialog — Bootstrap

```jsx live
function ModalExample() {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <RB.Button variant="primary" onClick={() => setShow(true)}>
        계정 삭제
      </RB.Button>
      <RB.Modal show={show} onHide={() => setShow(false)} centered>
        <RB.Modal.Header closeButton>
          <RB.Modal.Title>계정을 삭제하시겠습니까?</RB.Modal.Title>
        </RB.Modal.Header>
        <RB.Modal.Body>
          이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
        </RB.Modal.Body>
        <RB.Modal.Footer>
          <RB.Button variant="outline-secondary" onClick={() => setShow(false)}>취소</RB.Button>
          <RB.Button variant="danger" onClick={() => setShow(false)}>삭제</RB.Button>
        </RB.Modal.Footer>
      </RB.Modal>
    </>
  )
}
```

```jsx live
function OffcanvasExample() {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <RB.Button variant="primary" onClick={() => setShow(true)}>
        계정 삭제
      </RB.Button>
      <RB.Offcanvas show={show} onHide={() => setShow(false)} placement="bottom">
        <RB.Offcanvas.Header closeButton>
          <RB.Offcanvas.Title>계정을 삭제하시겠습니까?</RB.Offcanvas.Title>
        </RB.Offcanvas.Header>
        <RB.Offcanvas.Body>
          <p>이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.</p>
          <div style={{display:'flex', gap:'8px', justifyContent:'flex-end'}}>
            <RB.Button variant="outline-secondary" onClick={() => setShow(false)}>취소</RB.Button>
            <RB.Button variant="danger" onClick={() => setShow(false)}>삭제</RB.Button>
          </div>
        </RB.Offcanvas.Body>
      </RB.Offcanvas>
    </>
  )
}
```
