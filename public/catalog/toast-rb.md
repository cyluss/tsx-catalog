# Toast — Bootstrap

```jsx live
function ToastExample() {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <div style={{display:'flex', gap:'8px'}}>
        <RB.Button variant="outline-secondary" onClick={() => setShow(true)}>저장</RB.Button>
      </div>
      <RB.ToastContainer position="bottom-end" className="p-3">
        <RB.Toast show={show} onClose={() => setShow(false)} autohide delay={3000} bg="success">
          <RB.Toast.Header>
            <strong className="me-auto">알림</strong>
          </RB.Toast.Header>
          <RB.Toast.Body className="text-white">저장되었습니다.</RB.Toast.Body>
        </RB.Toast>
      </RB.ToastContainer>
    </>
  )
}
```
