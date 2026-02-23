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
  <dt>구현</dt>
  <dd>react-bootstrap과 shadcn/ui 모두 ScrollSpy 컴포넌트가 없다. <code>IntersectionObserver</code>로 직접 구현한다. 스크롤 컨테이너(<code>root</code>)를 <code>window</code>가 아닌 특정 요소로 지정하면 중첩 스크롤 영역에서도 동작한다.</dd>
  <dt>라우터 구현 권장</dt>
  <dd>선택 — 섹션이 독립 URL을 가져야 할 경우 hash 라우팅과 연동한다. 단계적 입력 흐름에서는 URL 노출 없이 상태로만 관리해도 충분하다.</dd>
</dl>
