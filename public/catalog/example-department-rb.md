# 부서 CRUD — Bootstrap

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
  const [showToast, setShowToast] = React.useState(false)
  const [toastMsg, setToastMsg] = React.useState('')

  const childCount = (deptNo) => depts.filter(d => d.admrDept === deptNo).length

  const notify = (msg) => { setToastMsg(msg); setShowToast(true) }

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
    notify(dialog === 'add' ? '부서가 추가되었습니다.' : '수정되었습니다.')
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
    notify('삭제되었습니다.')
  }

  const f = (key) => ({ value: form[key], onChange: (e) => setForm(p => ({ ...p, [key]: e.target.value })) })

  return (
    <div style={{ maxWidth: '640px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-semibold">부서 관리</span>
        <RB.Button variant="dark" size="sm" onClick={openAdd}>+ 추가</RB.Button>
      </div>

      <RB.Table bordered hover size="sm" responsive>
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
                  <RB.Button variant="outline-secondary" size="sm" onClick={() => openEdit(dept)}>수정</RB.Button>
                  <RB.Button variant="outline-danger" size="sm" onClick={() => setDeleteTarget(dept)}>삭제</RB.Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </RB.Table>

      <RB.Modal show={dialog === 'add' || dialog === 'edit'} onHide={() => setDialog(null)}>
        <RB.Modal.Header closeButton>
          <RB.Modal.Title>{dialog === 'add' ? '부서 추가' : '부서 수정'}</RB.Modal.Title>
        </RB.Modal.Header>
        <RB.Modal.Body>
          <div className="d-flex flex-column gap-3">
            <RB.Form.Group>
              <RB.Form.Label>부서번호</RB.Form.Label>
              <RB.Form.Control {...f('deptNo')} readOnly={dialog === 'edit'} maxLength={3} placeholder="예: A00" isInvalid={!!errors.deptNo} />
              <RB.Form.Control.Feedback type="invalid">{errors.deptNo}</RB.Form.Control.Feedback>
            </RB.Form.Group>
            <RB.Form.Group>
              <RB.Form.Label>부서명</RB.Form.Label>
              <RB.Form.Control {...f('deptName')} maxLength={36} isInvalid={!!errors.deptName} />
              <RB.Form.Control.Feedback type="invalid">{errors.deptName}</RB.Form.Control.Feedback>
            </RB.Form.Group>
            <RB.Form.Group>
              <RB.Form.Label>상위부서</RB.Form.Label>
              <RB.Form.Select value={form.admrDept} onChange={e => setForm(p => ({ ...p, admrDept: e.target.value }))}>
                <option value="">없음</option>
                {depts.filter(d => d.deptNo !== form.deptNo).map(d => (
                  <option key={d.deptNo} value={d.deptNo}>{d.deptNo} — {d.deptName}</option>
                ))}
              </RB.Form.Select>
            </RB.Form.Group>
            <RB.Form.Group>
              <RB.Form.Label>위치</RB.Form.Label>
              <RB.Form.Control {...f('location')} maxLength={16} placeholder="선택" />
            </RB.Form.Group>
          </div>
        </RB.Modal.Body>
        <RB.Modal.Footer>
          <RB.Button variant="outline-secondary" onClick={() => setDialog(null)}>취소</RB.Button>
          <RB.Button variant="dark" onClick={handleSave}>저장</RB.Button>
        </RB.Modal.Footer>
      </RB.Modal>

      <RB.Modal show={!!deleteTarget} onHide={() => setDeleteTarget(null)}>
        <RB.Modal.Header closeButton>
          <RB.Modal.Title>부서 삭제</RB.Modal.Title>
        </RB.Modal.Header>
        <RB.Modal.Body>
          <div className="d-flex flex-column gap-3">
            {childCount(deleteTarget?.deptNo) > 0 && (
              <RB.Alert variant="danger">
                하위 부서 {childCount(deleteTarget?.deptNo)}개가 함께 삭제됩니다. (ON DELETE CASCADE)
              </RB.Alert>
            )}
            <p className="mb-0" style={{ fontSize: '0.875rem' }}>
              <strong>{deleteTarget?.deptName}</strong> ({deleteTarget?.deptNo})을 삭제하시겠습니까?
            </p>
          </div>
        </RB.Modal.Body>
        <RB.Modal.Footer>
          <RB.Button variant="outline-secondary" onClick={() => setDeleteTarget(null)}>취소</RB.Button>
          <RB.Button variant="danger" onClick={handleDelete}>삭제</RB.Button>
        </RB.Modal.Footer>
      </RB.Modal>

      <RB.ToastContainer position="bottom-end" className="p-3">
        <RB.Toast show={showToast} onClose={() => setShowToast(false)} autohide delay={2500} bg="success">
          <RB.Toast.Header><strong className="me-auto">알림</strong></RB.Toast.Header>
          <RB.Toast.Body className="text-white">{toastMsg}</RB.Toast.Body>
        </RB.Toast>
      </RB.ToastContainer>
    </div>
  )
}
```
