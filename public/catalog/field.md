# Field

<dl>
  <dt>원칙</dt>
  <dd>레이블, 입력, 설명, 에러를 하나의 단위로 묶는다. input 태그를 단독으로 사용하지 않는다. 레이블 없는 필드는 접근성 위반이다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>텍스트, 이메일, 비밀번호 입력</p><p>에러 메시지가 필요한 폼 필드</p><p>도움말 텍스트가 있는 필드</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>체크박스·라디오 그룹 — FieldSet 사용</p><p>레이블 없이 아이콘만 있는 입력</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>에러 메시지는 error.message를 그대로 표시한다. 에이전트가 에러 문구를 임의로 만들지 않는다. placeholder만으로 레이블을 대체하지 않는다.</dd>
</dl>
