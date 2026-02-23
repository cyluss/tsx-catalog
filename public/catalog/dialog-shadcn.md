# Dialog — shadcn/ui

```jsx live
<Shad.Dialog>
  <Shad.DialogTrigger asChild>
    <Shad.Button variant="outline">계정 삭제</Shad.Button>
  </Shad.DialogTrigger>
  <Shad.DialogContent>
    <Shad.DialogHeader>
      <Shad.DialogTitle>계정을 삭제하시겠습니까?</Shad.DialogTitle>
      <Shad.DialogDescription>
        이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
      </Shad.DialogDescription>
    </Shad.DialogHeader>
    <Shad.DialogFooter>
      <Shad.DialogClose asChild>
        <Shad.Button variant="outline">취소</Shad.Button>
      </Shad.DialogClose>
      <Shad.Button variant="destructive">삭제</Shad.Button>
    </Shad.DialogFooter>
  </Shad.DialogContent>
</Shad.Dialog>
```

```jsx live
<Shad.Sheet>
  <Shad.SheetTrigger asChild>
    <Shad.Button variant="outline">계정 삭제</Shad.Button>
  </Shad.SheetTrigger>
  <Shad.SheetContent side="bottom">
    <Shad.SheetHeader>
      <Shad.SheetTitle>계정을 삭제하시겠습니까?</Shad.SheetTitle>
      <Shad.SheetDescription>
        이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
      </Shad.SheetDescription>
    </Shad.SheetHeader>
    <Shad.SheetFooter>
      <Shad.SheetClose asChild>
        <Shad.Button variant="outline">취소</Shad.Button>
      </Shad.SheetClose>
      <Shad.Button variant="destructive">삭제</Shad.Button>
    </Shad.SheetFooter>
  </Shad.SheetContent>
</Shad.Sheet>
```
