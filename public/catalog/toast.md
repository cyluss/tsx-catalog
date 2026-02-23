# Toast

<dl>
  <dt>원칙</dt>
  <dd>사용자의 액션에 대한 즉각적인 피드백이다. 흐름을 중단하지 않고 화면 가장자리에 잠깐 나타났다가 사라진다. 확인을 요구하지 않는다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>저장·삭제·복사 등 액션 완료 피드백</p><p>백그라운드 작업 결과 (업로드 완료)</p><p>되돌리기(Undo) 제공이 필요한 경우</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>확인이 필요한 경우 — Dialog 사용</p><p>페이지에 고정된 상태 메시지 — Alert 사용</p><p>오류 상세 내용이 긴 경우</p></div>
    </div>
  </dd>
  <dt>변형</dt>
  <dd>
    <ul>
      <li><strong>default</strong> — 일반 정보</li>
      <li><strong>success</strong> — 작업 성공</li>
      <li><strong>error</strong> — 작업 실패</li>
      <li><strong>warning</strong> — 주의 필요</li>
    </ul>
  </dd>
  <dt>선택 규칙</dt>
  <dd>API 성공 응답 후에는 success, 실패 응답 후에는 error를 사용한다. 메시지는 1~2문장으로 짧게 쓴다. 자동 닫힘은 3–5초가 적절하다.</dd>
  <dt>위치</dt>
  <dd>우하단(<code>bottom-end</code>)이 기본값이다. 모바일에서는 하단 전체 너비로 표시하는 것이 터치하기 쉽다.</dd>
  <dt>라우터 구현 권장</dt>
  <dd>아니오 — Toast는 일시적 UI 상태이므로 URL에 반영하지 않는다.</dd>
</dl>
