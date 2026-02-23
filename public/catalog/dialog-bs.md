# Dialog — Bootstrap Utilities

```jsx live
function ModalDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <button className="btn btn-outline-dark" onClick={() => setOpen(true)}>계정 삭제</button>
      {open && (
        <div>
          <div className="modal-backdrop fade show" style={{position:'fixed',inset:0,zIndex:1040}} onClick={() => setOpen(false)} />
          <div className="modal d-block" style={{zIndex:1050}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">계정을 삭제하시겠습니까?</h5>
                  <button className="btn-close" onClick={() => setOpen(false)} />
                </div>
                <div className="modal-body">
                  이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
                </div>
                <div className="modal-footer">
                  <button className="btn btn-outline-secondary" onClick={() => setOpen(false)}>취소</button>
                  <button className="btn btn-danger" onClick={() => setOpen(false)}>삭제</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
```

```jsx live
function OffcanvasDemo() {
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <button className="btn btn-outline-dark" onClick={() => setOpen(true)}>계정 삭제</button>
      {open && (
        <div>
          <div className="modal-backdrop fade show" style={{position:'fixed',inset:0,zIndex:1040}} onClick={() => setOpen(false)} />
          <div className="offcanvas offcanvas-bottom show" style={{zIndex:1050,height:'auto'}}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">계정을 삭제하시겠습니까?</h5>
              <button className="btn-close" onClick={() => setOpen(false)} />
            </div>
            <div className="offcanvas-body">
              <p>이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.</p>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-outline-secondary" onClick={() => setOpen(false)}>취소</button>
                <button className="btn btn-danger" onClick={() => setOpen(false)}>삭제</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
```
