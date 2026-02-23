# Switch — shadcn/ui

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.Switch id="notifications" defaultChecked />
    <Shad.Label htmlFor="notifications">알림 수신</Shad.Label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.Switch id="marketing" />
    <Shad.Label htmlFor="marketing">마케팅 정보 수신</Shad.Label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <Shad.Switch id="disabled" disabled />
    <Shad.Label htmlFor="disabled">비활성</Shad.Label>
  </div>
</div>
```
