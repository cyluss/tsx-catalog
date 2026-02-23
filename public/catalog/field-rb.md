# Field — Bootstrap

```jsx live
<div style={{maxWidth:'320px'}}>
  <RB.Form>
    <RB.Form.Group className="mb-3" controlId="fieldEmail">
      <RB.Form.Label>이메일</RB.Form.Label>
      <RB.Form.Control type="email" placeholder="example@email.com" />
      <RB.Form.Text className="text-muted">로그인에 사용할 이메일을 입력하세요.</RB.Form.Text>
    </RB.Form.Group>
    <RB.Form.Group className="mb-3" controlId="fieldPassword">
      <RB.Form.Label>비밀번호</RB.Form.Label>
      <RB.Form.Control type="password" isInvalid />
      <RB.Form.Control.Feedback type="invalid">비밀번호는 8자 이상이어야 합니다.</RB.Form.Control.Feedback>
    </RB.Form.Group>
  </RB.Form>
</div>
```
