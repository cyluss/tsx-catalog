# 프로필 설정 — Tailwind

```jsx live
function ProfileForm() {
  const [active, setActive] = React.useState('profile')
  const [name, setName] = React.useState('홍길동')
  const [language, setLanguage] = React.useState('ko')
  const [notifyEmail, setNotifyEmail] = React.useState(true)
  const [notifyProduct, setNotifyProduct] = React.useState(false)
  const [error, setError] = React.useState('')
  const [saving, setSaving] = React.useState(false)

  const handleSave = () => {
    if (!name.trim()) {
      setError('이름을 입력해주세요.')
      return
    }
    setError('')
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      toast.success('저장되었습니다.')
    }, 800)
  }

  const tabBase = 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all'
  const tabActive = `${tabBase} bg-background text-foreground shadow-sm`
  const tabInactive = `${tabBase} text-muted-foreground hover:bg-background/50`

  const inputCls = 'flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-ring'
  const selectCls = 'flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-ring'

  return (
    <div style={{ maxWidth: '440px' }}>
      <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-4">
        <button className={active === 'profile' ? tabActive : tabInactive} onClick={() => setActive('profile')}>기본 정보</button>
        <button className={active === 'notifications' ? tabActive : tabInactive} onClick={() => setActive('notifications')}>알림</button>
      </div>

      {active === 'profile' && (
        <div className="pt-5" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animationDuration: '0s' }}>
          {error && (
            <div className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">이름</label>
            <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력하세요" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">이메일</label>
            <input className={inputCls} value="user@example.com" readOnly />
            <span className="text-sm text-muted-foreground">이메일은 변경할 수 없습니다.</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">언어</label>
            <select className={selectCls} value={language} onChange={(e) => setLanguage(e.target.value)}>
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
        <div className="pt-5" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animationDuration: '0s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p className="text-sm font-medium">이메일 알림</p>
              <p className="text-sm text-muted-foreground">댓글, 멘션을 이메일로 받습니다.</p>
            </div>
            <button
              role="switch"
              aria-checked={notifyEmail}
              onClick={() => setNotifyEmail(v => !v)}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${notifyEmail ? 'bg-primary' : 'bg-input'}`}
            >
              <span className={`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg transition-transform ${notifyEmail ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p className="text-sm font-medium">제품 업데이트</p>
              <p className="text-sm text-muted-foreground">새 기능 출시 소식을 받습니다.</p>
            </div>
            <button
              role="switch"
              aria-checked={notifyProduct}
              onClick={() => setNotifyProduct(v => !v)}
              className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${notifyProduct ? 'bg-primary' : 'bg-input'}`}
            >
              <span className={`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg transition-transform ${notifyProduct ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '1.5rem' }}>
        <button
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-medium h-9 px-4 hover:bg-primary/90 transition-all disabled:opacity-50"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? '저장 중...' : '저장'}
        </button>
      </div>
    </div>
  )
}
```
