# 부서 CRUD — Tailwind

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

  const childCount = (deptNo) => depts.filter(d => d.admrDept === deptNo).length

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
    toast.success(dialog === 'add' ? '부서가 추가되었습니다.' : '수정되었습니다.')
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
    toast.success('삭제되었습니다.')
  }

  const f = (key) => ({ value: form[key], onChange: (e) => setForm(p => ({ ...p, [key]: e.target.value })) })

  const inputCls = 'flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-ring'
  const inputErrCls = 'flex w-full rounded-md border border-destructive bg-background px-3 py-2 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-destructive/50'
  const btnPrimary = 'inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-medium h-9 px-4 hover:bg-primary/90 transition-all disabled:opacity-50'
  const btnOutline = 'inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium h-9 px-4 hover:bg-accent transition-all'
  const btnGhost = 'inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 hover:bg-accent transition-all'
  const btnDestructive = 'inline-flex items-center justify-center rounded-md bg-destructive text-white text-sm font-medium h-9 px-4 hover:bg-destructive/90 transition-all'

  const Modal = ({ open, onClose, title, children, footer }) => !open ? null : (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} onClick={onClose} />
      <div className="relative bg-background rounded-lg border border-border shadow-lg" style={{ width: '100%', maxWidth: '440px', margin: '1rem', zIndex: 1 }}>
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <span className="text-base font-semibold">{title}</span>
          <button className="text-muted-foreground hover:text-foreground text-lg leading-none" onClick={onClose}>✕</button>
        </div>
        <div className="px-6 py-4">{children}</div>
        <div className="flex justify-end gap-2 px-6 pb-6">{footer}</div>
      </div>
    </div>
  )

  return (
    <div style={{ maxWidth: '640px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1rem', fontWeight: 600 }}>부서 관리</span>
        <button className={btnPrimary} style={{ height: '2rem', padding: '0 0.75rem', fontSize: '0.8125rem' }} onClick={openAdd}>+ 추가</button>
      </div>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-2 px-3 font-medium text-foreground">부서번호</th>
            <th className="text-left py-2 px-3 font-medium text-foreground">부서명</th>
            <th className="text-left py-2 px-3 font-medium text-foreground">상위부서</th>
            <th className="text-left py-2 px-3 font-medium text-foreground">위치</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {depts.map(dept => (
            <tr key={dept.deptNo} className="border-b border-border hover:bg-muted/50">
              <td className="py-2 px-3 font-mono text-xs">{dept.deptNo}</td>
              <td className="py-2 px-3">{dept.deptName}</td>
              <td className="py-2 px-3 text-muted-foreground">{dept.admrDept ?? '—'}</td>
              <td className="py-2 px-3 text-muted-foreground">{dept.location ?? '—'}</td>
              <td className="py-2 px-3">
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <button className={btnGhost} onClick={() => openEdit(dept)}>수정</button>
                  <button className={btnGhost} onClick={() => setDeleteTarget(dept)}>삭제</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={dialog === 'add' || dialog === 'edit'} onClose={() => setDialog(null)} title={dialog === 'add' ? '부서 추가' : '부서 수정'}
        footer={<><button className={btnOutline} onClick={() => setDialog(null)}>취소</button><button className={btnPrimary} onClick={handleSave}>저장</button></>}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">부서번호</label>
            <input className={errors.deptNo ? inputErrCls : inputCls} {...f('deptNo')} readOnly={dialog === 'edit'} maxLength={3} placeholder="예: A00" />
            {errors.deptNo && <span className="text-xs text-destructive">{errors.deptNo}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">부서명</label>
            <input className={errors.deptName ? inputErrCls : inputCls} {...f('deptName')} maxLength={36} />
            {errors.deptName && <span className="text-xs text-destructive">{errors.deptName}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">상위부서</label>
            <select className={inputCls} value={form.admrDept} onChange={e => setForm(p => ({ ...p, admrDept: e.target.value }))}>
              <option value="">없음</option>
              {depts.filter(d => d.deptNo !== form.deptNo).map(d => (
                <option key={d.deptNo} value={d.deptNo}>{d.deptNo} — {d.deptName}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">위치</label>
            <input className={inputCls} {...f('location')} maxLength={16} placeholder="선택" />
          </div>
        </div>
      </Modal>

      <Modal open={!!deleteTarget} onClose={() => setDeleteTarget(null)} title="부서 삭제"
        footer={<><button className={btnOutline} onClick={() => setDeleteTarget(null)}>취소</button><button className={btnDestructive} onClick={handleDelete}>삭제</button></>}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {childCount(deleteTarget?.deptNo) > 0 && (
            <div className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              하위 부서 {childCount(deleteTarget?.deptNo)}개가 함께 삭제됩니다. (ON DELETE CASCADE)
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">{deleteTarget?.deptName}</strong> ({deleteTarget?.deptNo})을 삭제하시겠습니까?
          </p>
        </div>
      </Modal>
    </div>
  )
}
```
