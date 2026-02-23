# Spinner — Bootstrap Utilities

```jsx live
function SpinnerDemo() {
  const [loading, setLoading] = React.useState(false)
  const [pageLoading, setPageLoading] = React.useState(false)

  const handleSubmit = () => { setLoading(true); setTimeout(() => setLoading(false), 2000) }
  const handlePageLoad = () => { setPageLoading(true); setTimeout(() => setPageLoading(false), 2000) }

  const label = { fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={label}>버튼 내부</p>
        <button className="btn btn-dark d-inline-flex align-items-center gap-2" onClick={handleSubmit} disabled={loading}>
          {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />}
          {loading ? '저장 중...' : '저장'}
        </button>
      </div>

      <div>
        <p style={label}>섹션 로딩</p>
        <button className="btn btn-outline-secondary btn-sm" onClick={handlePageLoad} disabled={pageLoading}>미리보기 로드</button>
        <div style={{ marginTop: '1rem', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          {pageLoading
            ? <div className="spinner-border" role="status"><span className="visually-hidden">로딩 중...</span></div>
            : <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>콘텐츠 영역</span>
          }
        </div>
      </div>

      <div>
        <p style={label}>크기 변형</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className="spinner-border spinner-border-sm" role="status" />
          <div className="spinner-border" role="status" />
          <div className="spinner-border" role="status" style={{ width: '2rem', height: '2rem' }} />
        </div>
      </div>
    </div>
  )
}
```
