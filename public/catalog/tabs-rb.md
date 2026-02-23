# Tabs — Bootstrap

```jsx live
<RB.Tabs defaultActiveKey="info">
  <RB.Tab eventKey="info" title="정보">
    <div style={{padding:'1rem 0'}}>
      <p className="mb-1"><strong>이름</strong> 홍길동</p>
      <p className="mb-1"><strong>이메일</strong> hong@example.com</p>
      <p className="mb-0"><strong>가입일</strong> 2024-01-15</p>
    </div>
  </RB.Tab>
  <RB.Tab eventKey="activity" title="활동">
    <div style={{padding:'1rem 0'}}>
      <p className="mb-1">마지막 로그인: 2026-02-23</p>
      <p className="mb-0">게시글: 12개</p>
    </div>
  </RB.Tab>
  <RB.Tab eventKey="settings" title="설정" disabled>
    <div style={{padding:'1rem 0'}}>설정 내용</div>
  </RB.Tab>
</RB.Tabs>
```
