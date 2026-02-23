# Field — Tailwind Utilities

```jsx live
<div style={{maxWidth:'320px', display:'flex', flexDirection:'column', gap:'1rem'}}>
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium">이메일</label>
    <input type="email" placeholder="example@email.com" className="flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-ring" />
    <p className="text-sm text-muted-foreground">로그인에 사용할 이메일을 입력하세요.</p>
  </div>
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium">비밀번호</label>
    <input type="password" className="flex h-9 w-full rounded-md border border-destructive bg-background px-3 py-1 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-destructive/50" />
    <p className="text-sm text-destructive">비밀번호는 8자 이상이어야 합니다.</p>
  </div>
</div>
```
