# Popover — shadcn/ui

```jsx live
<Shad.Popover>
  <Shad.PopoverTrigger asChild>
    <Shad.Button variant="outline">배포 정보 보기</Shad.Button>
  </Shad.PopoverTrigger>
  <Shad.PopoverContent>
    <Shad.PopoverHeader>
      <Shad.PopoverTitle>배포 정보</Shad.PopoverTitle>
    </Shad.PopoverHeader>
    <div style={{fontSize:'0.875rem', display:'flex', flexDirection:'column', gap:'4px'}}>
      <div><strong>버전</strong> v2.4.1</div>
      <div><strong>배포일</strong> 2026-02-23</div>
      <div><strong>배포자</strong> 김개발</div>
    </div>
  </Shad.PopoverContent>
</Shad.Popover>
```
