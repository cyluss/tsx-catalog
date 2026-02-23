# Spinner — Tailwind Utilities

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
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium h-9 px-4 hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none transition-all"
          onClick={handleSubmit} disabled={loading}
        >
          {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />}
          {loading ? '저장 중...' : '저장'}
        </button>
      </div>

      <div>
        <p style={label}>섹션 로딩</p>
        <button
          className="inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-8 px-3 hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-all"
          onClick={handlePageLoad} disabled={pageLoading}
        >
          미리보기 로드
        </button>
        <div style={{ marginTop: '1rem', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          {pageLoading
            ? <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            : <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>콘텐츠 영역</span>
          }
        </div>
      </div>

      <div>
        <p style={label}>크기 변형</p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      </div>
    </div>
  )
}
```
