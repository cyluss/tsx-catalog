# Popover

<dl>
  <dt>원칙</dt>
  <dd>트리거 요소 근처에 맥락 정보나 보조 액션을 표시한다. Dialog와 달리 흐름을 중단하지 않으며, 외부 클릭 시 자동으로 닫힌다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>아이콘/버튼의 보충 설명</p><p>인라인 설정 패널</p><p>미리보기 카드 (사용자 프로필, 링크 미리보기)</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>단순 한 줄 설명 — Tooltip 사용</p><p>확인/입력이 필요한 경우 — Dialog 사용</p><p>메뉴 목록 — Dropdown Menu 사용</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>Popover는 클릭으로 열고, Tooltip은 hover로 열린다. 모바일에서는 hover가 없으므로 Tooltip 대신 Popover를 고려한다.</dd>
  <dt>라우터 구현 권장</dt>
  <dd>아니오 — 열림 상태는 UI 상태로 관리한다.</dd>
</dl>
