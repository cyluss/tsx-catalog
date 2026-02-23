# 부서 CRUD — Bootstrap Utilities

```jsx live
function DepartmentCRUD() {
  const [depts, setDepts] = React.useState([
    { deptNo: 'A00', deptName: '총무부',  mgrNo: null,     admrDept: null,  location: '서울' },
    { deptNo: 'B01', deptName: '기획부',  mgrNo: '000010', admrDept: 'A00', location: '서울' },
    { deptNo: 'C01', deptName: '개발부',  mgrNo: '000020', admrDept: 'A00', location: '부산' },
    { deptNo: 'D01', deptName: '영업부',  mgrNo: null,     admrDept: 'B01', location: '대구' },
    { deptNo: 'E01', deptName: '지원부',  mgrNo: null,     admrDept: 'C01', location: null  },
  ])
  const [dialog, setDialog] = React.useState(null)
  const [deleteTarget, setDeleteTarget] = React.useState(null)
  const empty = { deptNo: '', deptName: '', mgrNo: '', admrDept: '', location: '' }
  const [form, setForm] = React.useState(empty)
  const [errors, setErrors] = React.useState({})
  const [toasts, setToasts] = React.useState([])

  const childCount = (deptNo) => depts.filter(d => d.admrDept === deptNo).length

  const addToast = (message) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 2500)
  }

  const openAdd = () => { setForm(empty); setErrors({}); setDialog('add') }
  const openEdit = (dept) => {
    setForm({ ...dept, mgrNo: dept.mgrNo ?? '', admrDept: dept.admrDept ?? '', location: dept.location ?? '' })
    setErrors({})
    setDialog('edit')
  }

  const validate = () => {
    const errs = {}
    if (!form.deptNo.trim()) errs.deptNo = '필수 항목입니다.'
    else if (dialog === 'add' && depts.find(d => d.deptNo === form.deptNo.toUpperCase())) errs.deptNo = '이미 존재하는 부서번호입니다.'
    if (!form.deptName.trim()) errs.deptName = '필수 항목입니다.'
    return errs
  }

  const handleSave = () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const dept = {
      deptNo:   form.deptNo.trim().toUpperCase(),
      deptName: form.deptName.trim(),
      mgrNo:    form.mgrNo.trim()    || null,
      admrDept: form.admrDept        || null,
      location: form.location.trim() || null,
    }
    if (dialog === 'add') setDepts(prev => [...prev, dept])
    else setDepts(prev => prev.map(d => d.deptNo === dept.deptNo ? dept : d))
    setDialog(null)
    addToast(dialog === 'add' ? '부서가 추가되었습니다.' : '수정되었습니다.')
  }

  const handleDelete = () => {
    const deleteRecursive = (deptNo, list) => {
      const children = list.filter(d => d.admrDept === deptNo)
      let result = list.filter(d => d.deptNo !== deptNo)
      children.forEach(c => { result = deleteRecursive(c.deptNo, result) })
      return result
    }
    setDepts(prev => deleteRecursive(deleteTarget.deptNo, prev))
    setDeleteTarget(null)
    addToast('삭제되었습니다.')
  }

  const f = (key) => ({ value: form[key], onChange: (e) => setForm(p => ({ ...p, [key]: e.target.value })) })

  const isOpen = dialog === 'add' || dialog === 'edit'

  return (
    <div style={{ maxWidth: '640px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-semibold">부서 관리</span>
        <button className="btn btn-dark btn-sm" onClick={openAdd}>+ 추가</button>
      </div>

      <table className="table table-bordered table-hover table-sm">
        <thead>
          <tr>
            <th>부서번호</th>
            <th>부서명</th>
            <th>상위부서</th>
            <th>위치</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {depts.map(dept => (
            <tr key={dept.deptNo}>
              <td><code>{dept.deptNo}</code></td>
              <td>{dept.deptName}</td>
              <td>{dept.admrDept ?? '—'}</td>
              <td>{dept.location ?? '—'}</td>
              <td>
                <div className="d-flex gap-1">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => openEdit(dept)}>수정</button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => setDeleteTarget(dept)}>삭제</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOpen && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-backdrop fade show" style={{ position: 'fixed', inset: 0, zIndex: 1040 }} onClick={() => setDialog(null)} />
          <div className="modal-dialog" style={{ position: 'relative', zIndex: 1050 }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{dialog === 'add' ? '부서 추가' : '부서 수정'}</h5>
                <button className="btn-close" onClick={() => setDialog(null)} />
              </div>
              <div className="modal-body">
                <div className="d-flex flex-column gap-3">
                  <div>
                    <label className="form-label">부서번호</label>
                    <input className={`form-control${errors.deptNo ? ' is-invalid' : ''}`} {...f('deptNo')} readOnly={dialog === 'edit'} maxLength={3} placeholder="예: A00" />
                    {errors.deptNo && <div className="invalid-feedback">{errors.deptNo}</div>}
                  </div>
                  <div>
                    <label className="form-label">부서명</label>
                    <input className={`form-control${errors.deptName ? ' is-invalid' : ''}`} {...f('deptName')} maxLength={36} />
                    {errors.deptName && <div className="invalid-feedback">{errors.deptName}</div>}
                  </div>
                  <div>
                    <label className="form-label">상위부서</label>
                    <select className="form-select" value={form.admrDept} onChange={e => setForm(p => ({ ...p, admrDept: e.target.value }))}>
                      <option value="">없음</option>
                      {depts.filter(d => d.deptNo !== form.deptNo).map(d => (
                        <option key={d.deptNo} value={d.deptNo}>{d.deptNo} — {d.deptName}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">위치</label>
                    <input className="form-control" {...f('location')} maxLength={16} placeholder="선택" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={() => setDialog(null)}>취소</button>
                <button className="btn btn-dark" onClick={handleSave}>저장</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!!deleteTarget && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-backdrop fade show" style={{ position: 'fixed', inset: 0, zIndex: 1040 }} onClick={() => setDeleteTarget(null)} />
          <div className="modal-dialog" style={{ position: 'relative', zIndex: 1050 }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">부서 삭제</h5>
                <button className="btn-close" onClick={() => setDeleteTarget(null)} />
              </div>
              <div className="modal-body">
                <div className="d-flex flex-column gap-3">
                  {childCount(deleteTarget?.deptNo) > 0 && (
                    <div className="alert alert-danger py-2 mb-0">
                      하위 부서 {childCount(deleteTarget?.deptNo)}개가 함께 삭제됩니다. (ON DELETE CASCADE)
                    </div>
                  )}
                  <p className="mb-0" style={{ fontSize: '0.875rem' }}>
                    <strong>{deleteTarget?.deptName}</strong> ({deleteTarget?.deptNo})을 삭제하시겠습니까?
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={() => setDeleteTarget(null)}>취소</button>
                <button className="btn btn-danger" onClick={handleDelete}>삭제</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 1100, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {toasts.map(({ id, message }) => (
          <div key={id} className="toast show" role="alert" style={{ minWidth: '200px' }}>
            <div className="toast-header bg-success text-white">
              <strong className="me-auto">알림</strong>
              <button className="btn-close btn-close-white ms-2" onClick={() => setToasts(prev => prev.filter(t => t.id !== id))} />
            </div>
            <div className="toast-body">{message}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
```
