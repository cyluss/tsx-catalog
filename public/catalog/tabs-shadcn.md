# Tabs — shadcn/ui

```jsx live
<Shad.Tabs defaultValue="info">
  <Shad.TabsList>
    <Shad.TabsTrigger value="info">정보</Shad.TabsTrigger>
    <Shad.TabsTrigger value="activity">활동</Shad.TabsTrigger>
    <Shad.TabsTrigger value="settings" disabled>설정</Shad.TabsTrigger>
  </Shad.TabsList>
  <Shad.TabsContent value="info">
    <div style={{padding:'1rem 0', fontSize:'0.875rem', display:'flex', flexDirection:'column', gap:'4px'}}>
      <div><strong>이름</strong> 홍길동</div>
      <div><strong>이메일</strong> hong@example.com</div>
      <div><strong>가입일</strong> 2024-01-15</div>
    </div>
  </Shad.TabsContent>
  <Shad.TabsContent value="activity">
    <div style={{padding:'1rem 0', fontSize:'0.875rem', display:'flex', flexDirection:'column', gap:'4px'}}>
      <div>마지막 로그인: 2026-02-23</div>
      <div>게시글: 12개</div>
    </div>
  </Shad.TabsContent>
  <Shad.TabsContent value="settings">
    <div style={{padding:'1rem 0'}}>설정 내용</div>
  </Shad.TabsContent>
</Shad.Tabs>
```
