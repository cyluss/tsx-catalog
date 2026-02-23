# Textarea — Bootstrap Utilities

```jsx live
function TextareaDemo() {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const MAX = 200

  const handleSubmit = () => {
    if (!value.trim()) { setError('내용을 입력해주세요.'); setSubmitted(false); return }
    setError('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div style={{ maxWidth: '440px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div className="mb-1">
        <label className="form-label">댓글</label>
        <textarea
          rows={4}
          placeholder="내용을 입력하세요"
          value={value}
          onChange={(e) => { if (e.target.value.length <= MAX) setValue(e.target.value) }}
          className={`form-control${error ? ' is-invalid' : ''}`}
        />
        <div className="d-flex justify-content-between mt-1">
          {error
            ? <div className="invalid-feedback d-block">{error}</div>
            : <div className="form-text">자유롭게 작성하세요.</div>
          }
          <div className="form-text" style={{flexShrink:0}}>{value.length} / {MAX}</div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-dark" onClick={handleSubmit}>제출</button>
        {submitted && <span className="text-success" style={{fontSize:'0.875rem'}}>제출되었습니다.</span>}
      </div>
    </div>
  )
}
```
