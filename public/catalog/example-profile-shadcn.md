# 프로필 설정 — shadcn/ui

```jsx live
function ProfileForm() {
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

  return (
    <div style={{ maxWidth: '440px' }}>
      <Shad.Tabs defaultValue="profile">
        <Shad.TabsList>
          <Shad.TabsTrigger value="profile">기본 정보</Shad.TabsTrigger>
          <Shad.TabsTrigger value="notifications">알림</Shad.TabsTrigger>
        </Shad.TabsList>

        <Shad.TabsContent value="profile" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.25rem' }}>
          {error && (
            <Shad.Alert variant="destructive">
              <Shad.AlertDescription>{error}</Shad.AlertDescription>
            </Shad.Alert>
          )}
          <Shad.Field>
            <Shad.FieldLabel>이름</Shad.FieldLabel>
            <Shad.FieldGroup>
              <Shad.Input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력하세요" />
            </Shad.FieldGroup>
          </Shad.Field>
          <Shad.Field>
            <Shad.FieldLabel>이메일</Shad.FieldLabel>
            <Shad.FieldGroup>
              <Shad.Input value="user@example.com" readOnly />
            </Shad.FieldGroup>
            <Shad.FieldDescription>이메일은 변경할 수 없습니다.</Shad.FieldDescription>
          </Shad.Field>
          <Shad.Field>
            <Shad.FieldLabel>언어</Shad.FieldLabel>
            <Shad.Select value={language} onValueChange={setLanguage}>
              <Shad.SelectTrigger>
                <Shad.SelectValue />
              </Shad.SelectTrigger>
              <Shad.SelectContent>
                <Shad.SelectItem value="ko">한국어</Shad.SelectItem>
                <Shad.SelectItem value="en">English</Shad.SelectItem>
                <Shad.SelectItem value="ja">日本語</Shad.SelectItem>
                <Shad.SelectItem value="zh">中文</Shad.SelectItem>
                <Shad.SelectItem value="es">Español</Shad.SelectItem>
              </Shad.SelectContent>
            </Shad.Select>
          </Shad.Field>
        </Shad.TabsContent>

        <Shad.TabsContent value="notifications" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>이메일 알림</p>
              <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>댓글, 멘션을 이메일로 받습니다.</p>
            </div>
            <Shad.Switch checked={notifyEmail} onCheckedChange={setNotifyEmail} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>제품 업데이트</p>
              <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>새 기능 출시 소식을 받습니다.</p>
            </div>
            <Shad.Switch checked={notifyProduct} onCheckedChange={setNotifyProduct} />
          </div>
        </Shad.TabsContent>
      </Shad.Tabs>

      <div style={{ marginTop: '1.5rem' }}>
        <Shad.Button onClick={handleSave} disabled={saving}>
          {saving ? '저장 중...' : '저장'}
        </Shad.Button>
      </div>
    </div>
  )
}
```
