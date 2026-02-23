# Radio — Tailwind Utilities

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <input type="radio" name="tw-role" id="tw-admin" value="admin" className="h-4 w-4 accent-primary" />
    <label htmlFor="tw-admin" className="text-sm font-medium cursor-pointer">관리자</label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <input type="radio" name="tw-role" id="tw-member" value="member" defaultChecked className="h-4 w-4 accent-primary" />
    <label htmlFor="tw-member" className="text-sm font-medium cursor-pointer">멤버</label>
  </div>
  <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
    <input type="radio" name="tw-role" id="tw-viewer" value="viewer" className="h-4 w-4 accent-primary" />
    <label htmlFor="tw-viewer" className="text-sm font-medium cursor-pointer">뷰어</label>
  </div>
</div>
```
