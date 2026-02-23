# ButtonGroup — Tailwind Utilities

```jsx live
function ButtonGroupDemo() {
  const base = 'inline-flex items-center justify-center border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent hover:text-accent-foreground transition-colors'
  const first = `${base} rounded-l-md`
  const mid   = `${base} -ml-px rounded-none`
  const last  = `${base} -ml-px rounded-r-md`
  const top   = `${base} rounded-t-md`
  const vmid  = `${base} -mt-px rounded-none`
  const bot   = `${base} -mt-px rounded-b-md`

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
      <div className="inline-flex rounded-md shadow-xs" role="group" aria-label="페이지 이동">
        <button className={first}>이전</button>
        <button className={mid}>1</button>
        <button className={mid}>2</button>
        <button className={mid}>3</button>
        <button className={last}>다음</button>
      </div>

      <div className="inline-flex rounded-md shadow-xs" role="group" aria-label="텍스트 정렬">
        <button className={first}>왼쪽</button>
        <button className={mid}>가운데</button>
        <button className={last}>오른쪽</button>
      </div>

      <div className="inline-flex flex-col rounded-md shadow-xs" role="group" aria-label="수직 그룹">
        <button className={top}>옵션 A</button>
        <button className={vmid}>옵션 B</button>
        <button className={bot}>옵션 C</button>
      </div>
    </div>
  )
}
```
