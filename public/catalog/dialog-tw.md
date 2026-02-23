# Dialog — Tailwind Utilities

```jsx live
function DialogDemo() {
  const [open, setOpen] = React.useState(false)
  const btnOutline = 'inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent transition-all'
  const btnDestructive = 'inline-flex items-center justify-center rounded-md bg-destructive text-white text-sm font-medium h-9 px-4 hover:bg-destructive/90 transition-all'
  return (
    <div>
      <button className={btnOutline} onClick={() => setOpen(true)}>계정 삭제</button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-50 bg-background rounded-xl border shadow-lg w-full max-w-md p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">계정을 삭제하시겠습니까?</h2>
              <p className="text-sm text-muted-foreground mt-1">이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.</p>
            </div>
            <div className="flex justify-end gap-2">
              <button className={btnOutline} onClick={() => setOpen(false)}>취소</button>
              <button className={btnDestructive} onClick={() => setOpen(false)}>삭제</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
```

```jsx live
function SheetDemo() {
  const [open, setOpen] = React.useState(false)
  const btnOutline = 'inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent transition-all'
  const btnDestructive = 'inline-flex items-center justify-center rounded-md bg-destructive text-white text-sm font-medium h-9 px-4 hover:bg-destructive/90 transition-all'
  return (
    <div>
      <button className={btnOutline} onClick={() => setOpen(true)}>계정 삭제</button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-50 bg-background rounded-t-xl border-t shadow-lg w-full p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">계정을 삭제하시겠습니까?</h2>
              <p className="text-sm text-muted-foreground mt-1">이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.</p>
            </div>
            <div className="flex justify-end gap-2">
              <button className={btnOutline} onClick={() => setOpen(false)}>취소</button>
              <button className={btnDestructive} onClick={() => setOpen(false)}>삭제</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
```
