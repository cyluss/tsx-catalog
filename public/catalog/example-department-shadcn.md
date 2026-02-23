# 부서 CRUD — shadcn/ui

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

  const openAdd = () => {
    setForm(empty)
    setErrors({})
    setDialog('add')
  }

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

  return (
    <div style={{ maxWidth: '640px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1rem', fontWeight: 600 }}>부서 관리</span>
        <Shad.Button size="sm" onClick={openAdd}>+ 추가</Shad.Button>
      </div>

      <Shad.Table>
        <Shad.TableHeader>
          <Shad.TableRow>
            <Shad.TableHead>부서번호</Shad.TableHead>
            <Shad.TableHead>부서명</Shad.TableHead>
            <Shad.TableHead>상위부서</Shad.TableHead>
            <Shad.TableHead>위치</Shad.TableHead>
            <Shad.TableHead></Shad.TableHead>
          </Shad.TableRow>
        </Shad.TableHeader>
        <Shad.TableBody>
          {depts.map(dept => (
            <Shad.TableRow key={dept.deptNo}>
              <Shad.TableCell className="font-mono text-xs">{dept.deptNo}</Shad.TableCell>
              <Shad.TableCell>{dept.deptName}</Shad.TableCell>
              <Shad.TableCell>{dept.admrDept ?? '—'}</Shad.TableCell>
              <Shad.TableCell>{dept.location ?? '—'}</Shad.TableCell>
              <Shad.TableCell>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <Shad.Button variant="ghost" size="sm" onClick={() => openEdit(dept)}>수정</Shad.Button>
                  <Shad.Button variant="ghost" size="sm" onClick={() => setDeleteTarget(dept)}>삭제</Shad.Button>
                </div>
              </Shad.TableCell>
            </Shad.TableRow>
          ))}
        </Shad.TableBody>
      </Shad.Table>

      <Shad.Dialog open={dialog === 'add' || dialog === 'edit'} onOpenChange={(open) => !open && setDialog(null)}>
        <Shad.DialogContent>
          <Shad.DialogHeader>
            <Shad.DialogTitle>{dialog === 'add' ? '부서 추가' : '부서 수정'}</Shad.DialogTitle>
          </Shad.DialogHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
            <Shad.Field>
              <Shad.FieldLabel>부서번호</Shad.FieldLabel>
              <Shad.FieldGroup>
                <Shad.Input {...f('deptNo')} readOnly={dialog === 'edit'} maxLength={3} placeholder="예: A00" />
              </Shad.FieldGroup>
              {errors.deptNo && <Shad.FieldDescription className="text-destructive">{errors.deptNo}</Shad.FieldDescription>}
            </Shad.Field>
            <Shad.Field>
              <Shad.FieldLabel>부서명</Shad.FieldLabel>
              <Shad.FieldGroup>
                <Shad.Input {...f('deptName')} maxLength={36} />
              </Shad.FieldGroup>
              {errors.deptName && <Shad.FieldDescription className="text-destructive">{errors.deptName}</Shad.FieldDescription>}
            </Shad.Field>
            <Shad.Field>
              <Shad.FieldLabel>상위부서</Shad.FieldLabel>
              <Shad.Select value={form.admrDept} onValueChange={v => setForm(p => ({ ...p, admrDept: v }))}>
                <Shad.SelectTrigger><Shad.SelectValue placeholder="없음" /></Shad.SelectTrigger>
                <Shad.SelectContent>
                  <Shad.SelectItem value="">없음</Shad.SelectItem>
                  {depts.filter(d => d.deptNo !== form.deptNo).map(d => (
                    <Shad.SelectItem key={d.deptNo} value={d.deptNo}>{d.deptNo} — {d.deptName}</Shad.SelectItem>
                  ))}
                </Shad.SelectContent>
              </Shad.Select>
            </Shad.Field>
            <Shad.Field>
              <Shad.FieldLabel>위치</Shad.FieldLabel>
              <Shad.FieldGroup>
                <Shad.Input {...f('location')} maxLength={16} placeholder="선택" />
              </Shad.FieldGroup>
            </Shad.Field>
          </div>
          <Shad.DialogFooter>
            <Shad.Button variant="outline" onClick={() => setDialog(null)}>취소</Shad.Button>
            <Shad.Button onClick={handleSave}>저장</Shad.Button>
          </Shad.DialogFooter>
        </Shad.DialogContent>
      </Shad.Dialog>

      <Shad.Dialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <Shad.DialogContent>
          <Shad.DialogHeader>
            <Shad.DialogTitle>부서 삭제</Shad.DialogTitle>
          </Shad.DialogHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {childCount(deleteTarget?.deptNo) > 0 && (
              <Shad.Alert variant="destructive">
                <Shad.AlertDescription>
                  하위 부서 {childCount(deleteTarget?.deptNo)}개가 함께 삭제됩니다. (ON DELETE CASCADE)
                </Shad.AlertDescription>
              </Shad.Alert>
            )}
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              <strong>{deleteTarget?.deptName}</strong> ({deleteTarget?.deptNo})을 삭제하시겠습니까?
            </p>
          </div>
          <Shad.DialogFooter>
            <Shad.Button variant="outline" onClick={() => setDeleteTarget(null)}>취소</Shad.Button>
            <Shad.Button variant="destructive" onClick={handleDelete}>삭제</Shad.Button>
          </Shad.DialogFooter>
        </Shad.DialogContent>
      </Shad.Dialog>
    </div>
  )
}
```
