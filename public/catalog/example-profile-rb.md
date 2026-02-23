# 프로필 설정 — Bootstrap

```jsx live
function ProfileForm() {
  const [name, setName] = React.useState('홍길동')
  const [language, setLanguage] = React.useState('ko')
  const [notifyEmail, setNotifyEmail] = React.useState(true)
  const [notifyProduct, setNotifyProduct] = React.useState(false)
  const [error, setError] = React.useState('')
  const [saving, setSaving] = React.useState(false)
  const [showToast, setShowToast] = React.useState(false)

  const handleSave = () => {
    if (!name.trim()) {
      setError('이름을 입력해주세요.')
      return
    }
    setError('')
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setShowToast(true)
    }, 800)
  }

  return (
    <div style={{ maxWidth: '440px' }}>
      <RB.Tabs defaultActiveKey="profile">
        <RB.Tab eventKey="profile" title="기본 정보">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.25rem' }}>
            {error && <RB.Alert variant="danger">{error}</RB.Alert>}
            <RB.Form.Group>
              <RB.Form.Label>이름</RB.Form.Label>
              <RB.Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력하세요" />
            </RB.Form.Group>
            <RB.Form.Group>
              <RB.Form.Label>이메일</RB.Form.Label>
              <RB.Form.Control value="user@example.com" readOnly />
              <RB.Form.Text muted>이메일은 변경할 수 없습니다.</RB.Form.Text>
            </RB.Form.Group>
            <RB.Form.Group>
              <RB.Form.Label>언어</RB.Form.Label>
              <RB.Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="ko">한국어</option>
                <option value="en">English</option>
                <option value="ja">日本語</option>
                <option value="zh">中文</option>
                <option value="es">Español</option>
              </RB.Form.Select>
            </RB.Form.Group>
          </div>
        </RB.Tab>
        <RB.Tab eventKey="notifications" title="알림">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, margin: 0 }}>이메일 알림</p>
                <p style={{ fontSize: '0.8125rem', color: '#6b7280', margin: 0 }}>댓글, 멘션을 이메일로 받습니다.</p>
              </div>
              <RB.Form.Check type="switch" checked={notifyEmail} onChange={(e) => setNotifyEmail(e.target.checked)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, margin: 0 }}>제품 업데이트</p>
                <p style={{ fontSize: '0.8125rem', color: '#6b7280', margin: 0 }}>새 기능 출시 소식을 받습니다.</p>
              </div>
              <RB.Form.Check type="switch" checked={notifyProduct} onChange={(e) => setNotifyProduct(e.target.checked)} />
            </div>
          </div>
        </RB.Tab>
      </RB.Tabs>

      <div style={{ marginTop: '1.5rem' }}>
        <RB.Button variant="primary" onClick={handleSave} disabled={saving}>
          {saving ? '저장 중...' : '저장'}
        </RB.Button>
      </div>

      <RB.ToastContainer position="bottom-end" className="p-3">
        <RB.Toast show={showToast} onClose={() => setShowToast(false)} autohide delay={2500} bg="success">
          <RB.Toast.Header>
            <strong className="me-auto">알림</strong>
          </RB.Toast.Header>
          <RB.Toast.Body className="text-white">저장되었습니다.</RB.Toast.Body>
        </RB.Toast>
      </RB.ToastContainer>
    </div>
  )
}
```
