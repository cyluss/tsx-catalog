# Toast — shadcn/ui

```jsx live
<div style={{display:'flex', gap:'8px'}}>
  <Shad.Button variant="outline" onClick={() => toast.success("저장되었습니다")}>저장</Shad.Button>
  <Shad.Button variant="outline" onClick={() => toast.error("오류가 발생했습니다")}>에러</Shad.Button>
  <Shad.Button variant="outline" onClick={() => toast("작업이 완료되었습니다")}>기본</Shad.Button>
</div>
```
