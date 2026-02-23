# Textarea — Tailwind Utilities

```jsx live
function TextareaDemo() {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')
  const MAX = 200

  const handleSubmit = () => {
    if (!value.trim()) { setError('내용을 입력해주세요.'); return }
    setError('')
    toast.success('제출되었습니다.')
  }

  const inputCls = `flex w-full rounded-md border bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 resize-none ${error ? 'border-destructive focus:ring-destructive/50' : 'border-border focus:ring-ring'}`

  return (
    <div style={{ maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium">댓글</label>
        <textarea
          rows={4}
          placeholder="내용을 입력하세요"
          value={value}
          onChange={(e) => { if (e.target.value.length <= MAX) setValue(e.target.value) }}
          className={inputCls}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {error
            ? <span className="text-sm text-destructive">{error}</span>
            : <span className="text-sm text-muted-foreground">자유롭게 작성하세요.</span>
          }
          <span className="text-sm text-muted-foreground" style={{flexShrink:0}}>{value.length} / {MAX}</span>
        </div>
      </div>
      <div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-medium h-9 px-4 hover:bg-primary/90 transition-all" onClick={handleSubmit}>제출</button>
      </div>
    </div>
  )
}
```
