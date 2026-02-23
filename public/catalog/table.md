# Table

<dl>
  <dt>원칙</dt>
  <dd>행과 열로 구조화된 데이터를 표시한다. 스캔하기 쉽고 비교하기 쉬워야 한다.</dd>
  <dt>Table vs DataGrid</dt>
  <dd>
    <table>
      <thead><tr><th></th><th>Table</th><th>DataGrid</th></tr></thead>
      <tbody>
        <tr><td>데이터 규모</td><td>수십~수백 행</td><td>수천 행 이상 (가상 스크롤)</td></tr>
        <tr><td>정렬</td><td>클라이언트 단순 정렬</td><td>서버 정렬 + 다중 컬럼</td></tr>
        <tr><td>편집</td><td>없음</td><td>인라인 셀 편집</td></tr>
        <tr><td>컬럼</td><td>고정 너비</td><td>리사이즈·고정·숨김</td></tr>
        <tr><td>라이브러리</td><td>shadcn Table / RB.Table</td><td>TanStack Table, ag-Grid</td></tr>
      </tbody>
    </table>
    카탈로그의 Table은 수백 행 이하, 단일 컬럼 정렬, 행 선택까지만 다룬다. 그 이상은 DataGrid로 분리한다.
  </dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>속성이 3개 이상인 항목 목록</p><p>여러 항목을 비교해야 할 때</p><p>단순 정렬이 필요한 데이터</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>속성 1~2개 — 목록(ul) 사용</p><p>수천 행 이상 — DataGrid 사용</p><p>인라인 편집 필요 — DataGrid 사용</p></div>
    </div>
  </dd>
  <dt>빈 상태</dt>
  <dd>데이터가 없을 때 Empty State를 tbody 안에 colSpan으로 표시한다.</dd>
  <dt>선택 규칙</dt>
  <dd>Bootstrap: <code>striped hover responsive</code> 기본 적용. 정렬 가능한 열은 헤더 클릭으로 asc/desc 전환한다.</dd>
</dl>
