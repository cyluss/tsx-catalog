# Switch — Bootstrap Utilities

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="bs-noti" defaultChecked />
    <label className="form-check-label" htmlFor="bs-noti">알림 수신</label>
  </div>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="bs-mkt" />
    <label className="form-check-label" htmlFor="bs-mkt">마케팅 정보 수신</label>
  </div>
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="bs-disabled-sw" disabled />
    <label className="form-check-label" htmlFor="bs-disabled-sw">비활성</label>
  </div>
</div>
```
