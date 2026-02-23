# Checkbox — Bootstrap Utilities

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="bs-terms" />
    <label className="form-check-label" htmlFor="bs-terms">이용약관에 동의합니다</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="bs-marketing" defaultChecked />
    <label className="form-check-label" htmlFor="bs-marketing">마케팅 정보 수신에 동의합니다</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="bs-disabled" disabled />
    <label className="form-check-label" htmlFor="bs-disabled">비활성 항목</label>
  </div>
</div>
```
