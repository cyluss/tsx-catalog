# Popover — Bootstrap Utilities

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
    <div className="position-relative d-inline-block" ref={ref}>
      <button className="btn btn-outline-dark" onClick={() => setOpen(!open)}>배포 정보 보기</button>
      {open && (
        <div className="position-absolute start-0 mt-2 border rounded bg-white shadow" style={{top:'100%',zIndex:1050,width:'240px'}}>
          <div className="popover-header">배포 정보</div>
          <div className="popover-body" style={{display:'flex', flexDirection:'column', gap:'4px'}}>
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
