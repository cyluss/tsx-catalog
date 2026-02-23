# Radio — Bootstrap Utilities

```jsx live
<div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="bs-role" id="bs-admin" value="admin" />
    <label className="form-check-label" htmlFor="bs-admin">관리자</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="bs-role" id="bs-member" value="member" defaultChecked />
    <label className="form-check-label" htmlFor="bs-member">멤버</label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="bs-role" id="bs-viewer" value="viewer" />
    <label className="form-check-label" htmlFor="bs-viewer">뷰어</label>
  </div>
</div>
```
