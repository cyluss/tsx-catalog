# Alert

<dl>
  <dt>원칙</dt>
  <dd>시스템이 사용자에게 전달하는 메시지다. 에이전트가 문구를 임의로 만들지 않는다. 서버 응답의 메시지를 그대로 표시한다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>API 에러 응답</p><p>폼 유효성 검사 결과</p><p>시스템 안내 메시지</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>3초 후 사라지는 알림 — Toast 사용</p><p>페이지 전환 없이 표시되는 성공 피드백</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>API 에러는 항상 variant="danger"를 사용한다. 에러 메시지는 error.message를 그대로 표시한다.</dd>
</dl>
