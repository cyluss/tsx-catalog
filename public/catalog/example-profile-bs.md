# 프로필 설정 — Bootstrap Utilities

```jsx live
function ProfileForm() {
  const [active, setActive] = React.useState('profile')
  const [name, setName] = React.useState('홍길동')
  const [language, setLanguage] = React.useState('ko')
  const [notifyEmail, setNotifyEmail] = React.useState(true)
  const [notifyProduct, setNotifyProduct] = React.useState(false)
  const [error, setError] = React.useState('')
  const [saving, setSaving] = React.useState(false)
  const [toasts, setToasts] = React.useState([])

  const addToast = (message) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 2500)
  }

  const handleSave = () => {
    if (!name.trim()) {
      setError('이름을 입력해주세요.')
      return
    }
    setError('')
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      addToast('저장되었습니다.')
    }, 800)
  }

  return (
    <div style={{ maxWidth: '440px' }}>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button className={`nav-link${active === 'profile' ? ' active' : ''}`} onClick={() => setActive('profile')}>기본 정보</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link${active === 'notifications' ? ' active' : ''}`} onClick={() => setActive('notifications')}>알림</button>
        </li>
      </ul>

      {active === 'profile' && (
        <div className="d-flex flex-column gap-3">
          {error && <div className="alert alert-danger py-2">{error}</div>}
          <div>
            <label className="form-label">이름</label>
            <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력하세요" />
          </div>
          <div>
            <label className="form-label">이메일</label>
            <input className="form-control" value="user@example.com" readOnly />
            <div className="form-text">이메일은 변경할 수 없습니다.</div>
          </div>
          <div>
            <label className="form-label">언어</label>
            <select className="form-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      )}

      {active === 'notifications' && (
        <div className="d-flex flex-column gap-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0 fw-medium" style={{ fontSize: '0.875rem' }}>이메일 알림</p>
              <p className="mb-0 text-muted" style={{ fontSize: '0.8125rem' }}>댓글, 멘션을 이메일로 받습니다.</p>
            </div>
            <div className="form-check form-switch mb-0">
              <input className="form-check-input" type="checkbox" role="switch" checked={notifyEmail} onChange={(e) => setNotifyEmail(e.target.checked)} />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-0 fw-medium" style={{ fontSize: '0.875rem' }}>제품 업데이트</p>
              <p className="mb-0 text-muted" style={{ fontSize: '0.8125rem' }}>새 기능 출시 소식을 받습니다.</p>
            </div>
            <div className="form-check form-switch mb-0">
              <input className="form-check-input" type="checkbox" role="switch" checked={notifyProduct} onChange={(e) => setNotifyProduct(e.target.checked)} />
            </div>
          </div>
        </div>
      )}

      <div className="mt-4">
        <button className="btn btn-dark" onClick={handleSave} disabled={saving}>
          {saving ? '저장 중...' : '저장'}
        </button>
      </div>

      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 1100, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {toasts.map(({ id, message }) => (
          <div key={id} className="toast show" role="alert" style={{ minWidth: '200px' }}>
            <div className="toast-header bg-success text-white">
              <strong className="me-auto">알림</strong>
              <button className="btn-close btn-close-white ms-2" onClick={() => setToasts(prev => prev.filter(t => t.id !== id))} />
            </div>
            <div className="toast-body">{message}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
```
