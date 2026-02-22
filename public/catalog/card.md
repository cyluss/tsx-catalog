# Card

## Bootstrap

```jsx live
<RB.Card style={{width:'18rem'}}>
  <RB.Card.Body>
    <RB.Card.Title>사용자 정보</RB.Card.Title>
    <RB.Card.Text>hong@example.com</RB.Card.Text>
    <RB.Button variant="primary">편집</RB.Button>
  </RB.Card.Body>
</RB.Card>
```

## shadcn

```jsx live
<Shad.Card style={{width:'300px'}}>
  <Shad.CardHeader>
    <Shad.CardTitle>사용자 정보</Shad.CardTitle>
    <Shad.CardDescription>계정 기본 정보입니다.</Shad.CardDescription>
    <Shad.CardAction>
      <Shad.Badge variant="secondary">활성</Shad.Badge>
    </Shad.CardAction>
  </Shad.CardHeader>
  <Shad.CardContent>
    <p style={{fontSize:'14px', color:'#6b7280'}}>hong@example.com</p>
  </Shad.CardContent>
  <Shad.CardFooter>
    <Shad.Button style={{width:'100%'}}>편집</Shad.Button>
  </Shad.CardFooter>
</Shad.Card>
```
