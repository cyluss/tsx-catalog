# Textarea — Bootstrap

```jsx live
function TextareaExample() {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')
  const MAX = 200

  const handleSubmit = () => {
    if (!value.trim()) {
      setError('내용을 입력해주세요.')
      return
    }
    setError('')
    alert('제출되었습니다.')
  }

  return (
    <div style={{ maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <RB.Form.Group>
        <RB.Form.Label>댓글</RB.Form.Label>
        <RB.Form.Control
          as="textarea"
          rows={4}
          placeholder="내용을 입력하세요"
          value={value}
          onChange={(e) => {
            if (e.target.value.length <= MAX) setValue(e.target.value)
          }}
          isInvalid={!!error}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
          {error
            ? <RB.Form.Control.Feedback type="invalid" style={{ display: 'block' }}>{error}</RB.Form.Control.Feedback>
            : <RB.Form.Text muted>자유롭게 작성하세요.</RB.Form.Text>
          }
          <RB.Form.Text muted style={{ flexShrink: 0 }}>{value.length} / {MAX}</RB.Form.Text>
        </div>
      </RB.Form.Group>
      <div>
        <RB.Button variant="primary" onClick={handleSubmit}>제출</RB.Button>
      </div>
    </div>
  )
}
```
