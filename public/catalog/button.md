# Button

<dl>
  <dt>원칙</dt>
  <dd>사용자 액션을 트리거하는 유일한 수단이다. div나 span에 onClick을 붙이지 않는다. 접근성과 키보드 탐색이 자동으로 보장된다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>클릭으로 액션이 실행되는 모든 곳</p><p>폼 제출, 저장, 삭제, 모달 열기</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>페이지 이동 — a 태그 사용</p><p>div·span에 onClick을 붙이는 방식</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>한 화면에 variant="primary"는 하나만 사용한다. 주요 액션이 무엇인지 이슈의 성공 조건에서 판단한다.</dd>
</dl>
