# Textarea — shadcn/ui

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
    toast.success('제출되었습니다.')
  }

  return (
    <div style={{ maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Shad.Field invalid={!!error}>
        <Shad.FieldLabel>댓글</Shad.FieldLabel>
        <Shad.Textarea
          rows={4}
          placeholder="내용을 입력하세요"
          value={value}
          onChange={(e) => {
            if (e.target.value.length <= MAX) setValue(e.target.value)
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {error
            ? <Shad.FieldError>{error}</Shad.FieldError>
            : <Shad.FieldDescription>자유롭게 작성하세요.</Shad.FieldDescription>
          }
          <span style={{ fontSize: '0.8125rem', color: '#6b7280', flexShrink: 0 }}>{value.length} / {MAX}</span>
        </div>
      </Shad.Field>
      <div>
        <Shad.Button onClick={handleSubmit}>제출</Shad.Button>
      </div>
    </div>
  )
}
```
