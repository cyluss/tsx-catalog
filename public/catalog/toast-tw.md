# Toast — Tailwind Utilities

```jsx live
<div style={{display:'flex', gap:'8px'}}>
  <button className="inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent transition-all" onClick={() => toast.success("저장되었습니다")}>저장</button>
  <button className="inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent transition-all" onClick={() => toast.error("오류가 발생했습니다")}>에러</button>
  <button className="inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent transition-all" onClick={() => toast("작업이 완료되었습니다")}>기본</button>
</div>
```
