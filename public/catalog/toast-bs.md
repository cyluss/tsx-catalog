# Toast — Bootstrap Utilities

```jsx live
function ToastDemo() {
  const [toasts, setToasts] = React.useState([])

  const addToast = (message, type) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000)
  }

  return (
    <div>
      <div className="d-flex gap-2">
        <button className="btn btn-dark btn-sm" onClick={() => addToast('저장되었습니다', 'success')}>저장</button>
        <button className="btn btn-outline-dark btn-sm" onClick={() => addToast('오류가 발생했습니다', 'danger')}>에러</button>
        <button className="btn btn-outline-dark btn-sm" onClick={() => addToast('작업이 완료되었습니다', 'default')}>기본</button>
      </div>
      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 1100, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {toasts.map(({ id, message, type }) => {
          const headerCls = type === 'success' ? 'toast-header bg-success text-white' : type === 'danger' ? 'toast-header bg-danger text-white' : 'toast-header'
          return (
            <div key={id} className="toast show" role="alert" style={{ minWidth: '220px' }}>
              <div className={headerCls}>
                <strong className="me-auto">알림</strong>
                <button className="btn-close btn-close-white ms-2" onClick={() => setToasts(prev => prev.filter(t => t.id !== id))} />
              </div>
              <div className="toast-body">{message}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
```
