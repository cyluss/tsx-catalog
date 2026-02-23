# Radio — shadcn/ui

```jsx live
<Shad.RadioGroup defaultValue="member">
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.RadioGroupItem value="admin" id="r-admin" />
    <Shad.Label htmlFor="r-admin">관리자</Shad.Label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.RadioGroupItem value="member" id="r-member" />
    <Shad.Label htmlFor="r-member">멤버</Shad.Label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.RadioGroupItem value="viewer" id="r-viewer" />
    <Shad.Label htmlFor="r-viewer">뷰어</Shad.Label>
  </div>
</Shad.RadioGroup>
```
