# Checkbox — Tailwind Utilities

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <input type="checkbox" id="tw-terms" className="h-4 w-4 rounded border-border accent-primary cursor-pointer" />
    <label htmlFor="tw-terms" className="text-sm font-medium cursor-pointer">이용약관에 동의합니다</label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <input type="checkbox" id="tw-marketing" defaultChecked className="h-4 w-4 rounded border-border accent-primary cursor-pointer" />
    <label htmlFor="tw-marketing" className="text-sm font-medium cursor-pointer">마케팅 정보 수신에 동의합니다</label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <input type="checkbox" id="tw-disabled" disabled className="h-4 w-4 rounded border-border accent-primary opacity-50 cursor-not-allowed" />
    <label htmlFor="tw-disabled" className="text-sm font-medium opacity-50">비활성 항목</label>
  </div>
</div>
```
