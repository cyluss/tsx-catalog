# Scroll Spy

<dl>
  <dt>원칙</dt>
  <dd>스크롤 위치에 따라 현재 활성 섹션을 내비게이션에 반영한다. 사용자가 긴 페이지에서 "지금 어디 있는지"를 항상 알 수 있게 한다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>단계적 입력 흐름 (대화 기록 패턴)</p><p>긴 설정 페이지·문서 내 섹션 이동</p><p>onboarding 단계 표시</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>섹션이 2개 이하인 경우</p><p>페이지가 스크롤 없이 한 화면에 들어오는 경우</p></div>
    </div>
  </dd>
  <dt>Bootstrap 선택 규칙</dt>
  <dd><code>Nav variant="pills"</code> + <code>activeKey={activeSection}</code> + <code>Nav.Link eventKey={i}</code> — variant 없는 Nav는 active 스타일링이 없으므로 반드시 <code>variant="pills"</code>를 지정한다.</dd>
  <dt>라우터 구현 권장</dt>
  <dd>선택 — 섹션이 독립 URL을 가져야 할 경우 hash 라우팅과 연동한다. 단계적 입력 흐름에서는 URL 노출 없이 상태로만 관리해도 충분하다.</dd>
</dl>
