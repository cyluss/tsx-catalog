# Field — shadcn/ui

```jsx live
<Shad.FieldGroup style={{maxWidth:'320px'}}>
  <Shad.Field>
    <Shad.FieldLabel>이메일</Shad.FieldLabel>
    <Shad.Input type="email" placeholder="example@email.com" />
    <Shad.FieldDescription>로그인에 사용할 이메일을 입력하세요.</Shad.FieldDescription>
  </Shad.Field>
  <Shad.Field data-invalid="true">
    <Shad.FieldLabel>비밀번호</Shad.FieldLabel>
    <Shad.Input type="password" />
    <Shad.FieldError>비밀번호는 8자 이상이어야 합니다.</Shad.FieldError>
  </Shad.Field>
</Shad.FieldGroup>
```
