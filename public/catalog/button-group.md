# ButtonGroup

<dl>
  <dt>원칙</dt>
  <dd>관련 버튼을 시각적으로 하나의 단위로 묶는다. 각 버튼은 독립적으로 동작하며, 선택 상태를 다루려면 ToggleGroup을 사용한다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>이전/다음 페이지 이동</p><p>텍스트 정렬 (왼쪽·가운데·오른쪽)</p><p>관련 액션을 묶어 공간을 절약할 때</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>선택 상태가 필요한 경우 — ToggleGroup 사용</p><p>버튼이 4개 이상 — 별도 배치 권장</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>수평이 기본이다. 세로 나열이 필요하면 <code>orientation="vertical"</code>을 사용한다.</dd>
  <dt>라우터 구현 권장</dt>
  <dd>조건부 — 페이지네이션 용도일 때는 <code>?page=2</code> 형태의 URL 파라미터와 연동한다. 툴바 액션 용도일 때는 아니오.</dd>
</dl>
