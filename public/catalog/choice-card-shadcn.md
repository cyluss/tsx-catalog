# ChoiceCard — shadcn/ui

```jsx live
<Shad.RadioGroup defaultValue="pro" style={{display:'flex', gap:'12px'}}>
  <Shad.FieldLabel style={{cursor:'pointer'}}>
    <Shad.Field orientation="horizontal">
      <Shad.RadioGroupItem value="free" id="plan-free" />
      <Shad.FieldContent>
        <Shad.FieldTitle>무료</Shad.FieldTitle>
        <Shad.FieldDescription>월 0원 · 프로젝트 3개</Shad.FieldDescription>
      </Shad.FieldContent>
    </Shad.Field>
  </Shad.FieldLabel>
  <Shad.FieldLabel style={{cursor:'pointer'}}>
    <Shad.Field orientation="horizontal">
      <Shad.RadioGroupItem value="pro" id="plan-pro" />
      <Shad.FieldContent>
        <Shad.FieldTitle>Pro</Shad.FieldTitle>
        <Shad.FieldDescription>월 9,900원 · 무제한</Shad.FieldDescription>
      </Shad.FieldContent>
    </Shad.Field>
  </Shad.FieldLabel>
</Shad.RadioGroup>
```
