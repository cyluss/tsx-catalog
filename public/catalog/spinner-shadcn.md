# Spinner — shadcn/ui

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
        <Shad.Button onClick={handleSubmit} disabled={loading}>
          {loading && <Shad.Spinner style={{ marginRight: '0.5rem' }} />}
          {loading ? '저장 중...' : '저장'}
        </Shad.Button>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>섹션 로딩</p>
        <Shad.Button variant="outline" size="sm" onClick={handlePageLoad} disabled={pageLoading}>미리보기 로드</Shad.Button>
        <div style={{ marginTop: '1rem', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          {pageLoading
            ? <Shad.Spinner style={{ width: '1.5rem', height: '1.5rem' }} />
            : <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>콘텐츠 영역</span>
          }
        </div>
      </div>

      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>크기 변형</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Shad.Spinner style={{ width: '1rem', height: '1rem' }} />
          <Shad.Spinner style={{ width: '1.5rem', height: '1.5rem' }} />
          <Shad.Spinner style={{ width: '2rem', height: '2rem' }} />
        </div>
      </div>
    </div>
  )
}
```
