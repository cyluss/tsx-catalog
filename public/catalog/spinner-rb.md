# Spinner — Bootstrap

```jsx live
function SpinnerExample() {
  const [loading, setLoading] = React.useState(false)
  const [pageLoading, setPageLoading] = React.useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const handlePageLoad = () => {
    setPageLoading(true)
    setTimeout(() => setPageLoading(false), 2000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>버튼 내부</p>
        <RB.Button variant="primary" onClick={handleSubmit} disabled={loading}>
          {loading && <RB.Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" style={{ marginRight: '0.5rem' }} />}
          {loading ? '저장 중...' : '저장'}
        </RB.Button>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>섹션 로딩</p>
        <RB.Button variant="outline-secondary" size="sm" onClick={handlePageLoad} disabled={pageLoading}>미리보기 로드</RB.Button>
        <div style={{ marginTop: '1rem', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          {pageLoading
            ? <RB.Spinner animation="border" role="status"><span className="visually-hidden">로딩 중...</span></RB.Spinner>
            : <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>콘텐츠 영역</span>
          }
        </div>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Variants</p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {['primary', 'secondary', 'success', 'danger', 'warning'].map(v => (
            <RB.Spinner key={v} animation="border" variant={v} role="status">
              <span className="visually-hidden">로딩 중...</span>
            </RB.Spinner>
          ))}
        </div>
      </div>
    </div>
  )
}
```
