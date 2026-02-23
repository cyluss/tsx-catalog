# Card — Tailwind Utilities

```jsx live
<div className="rounded-xl border bg-card text-card-foreground shadow-sm" style={{width:'300px'}}>
  <div className="flex flex-col space-y-1.5 p-6 pb-4">
    <div className="flex items-start justify-between">
      <div>
        <div className="font-semibold leading-none tracking-tight">사용자 정보</div>
        <div className="text-sm text-muted-foreground mt-1">계정 기본 정보입니다.</div>
      </div>
      <span className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold">활성</span>
    </div>
  </div>
  <div className="p-6 pt-0">
    <p className="text-sm text-muted-foreground">hong@example.com</p>
  </div>
  <div className="flex items-center p-6 pt-0">
    <button className="inline-flex items-center justify-center w-full rounded-md bg-primary text-primary-foreground text-sm font-medium h-9 px-4 hover:bg-primary/90 transition-all">편집</button>
  </div>
</div>
```
