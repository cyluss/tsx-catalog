# Popover — Tailwind Utilities

```jsx live
function PopoverDemo() {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef(null)
  React.useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])
  return (
    <div className="relative inline-block" ref={ref}>
      <button
        className="inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent transition-all"
        onClick={() => setOpen(!open)}
      >
        배포 정보 보기
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 w-64 rounded-md border bg-background shadow-md p-4">
          <p className="text-sm font-medium mb-2">배포 정보</p>
          <div style={{fontSize:'0.875rem', display:'flex', flexDirection:'column', gap:'4px'}}>
            <div><strong>버전</strong> v2.4.1</div>
            <div><strong>배포일</strong> 2026-02-23</div>
            <div><strong>배포자</strong> 김개발</div>
          </div>
        </div>
      )}
    </div>
  )
}
```
