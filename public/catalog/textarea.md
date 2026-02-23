# Textarea

<dl>
  <dt>원칙</dt>
  <dd>여러 줄 텍스트 입력이 필요할 때 사용한다. 단일 줄이면 Field(Input)를 사용한다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>댓글, 메모, 본문 등 자유 서술</p><p>2줄 이상 입력이 예상될 때</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>이름, 이메일 등 단일 줄 — Field 사용</p><p>구조화된 입력 — Select·Radio 사용</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>Field 컴포넌트와 함께 사용한다. <code>rows</code>는 예상 입력량에 맞게 설정한다 (기본 3~4). 글자 수 제한이 있을 때는 현재 글자 수를 표시한다.</dd>
</dl>
