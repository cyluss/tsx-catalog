# Alert — Tailwind Utilities

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
  <div className="relative w-full rounded-lg border bg-card text-card-foreground p-4">
    <div className="text-sm font-medium mb-1">안내</div>
    <div className="text-sm text-muted-foreground">이 설정은 다음 로그인부터 적용됩니다.</div>
  </div>
  <div className="relative w-full rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
    <div className="text-sm font-medium mb-1">오류</div>
    <div className="text-sm">서버 오류가 발생했습니다.</div>
  </div>
</div>
```
