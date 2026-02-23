# Checkbox — shadcn/ui

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.Checkbox id="terms" />
    <Shad.Label htmlFor="terms">이용약관에 동의합니다</Shad.Label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.Checkbox id="marketing" defaultChecked />
    <Shad.Label htmlFor="marketing">마케팅 정보 수신에 동의합니다</Shad.Label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.Checkbox id="disabled" disabled />
    <Shad.Label htmlFor="disabled">비활성 항목</Shad.Label>
  </div>
</div>
```
