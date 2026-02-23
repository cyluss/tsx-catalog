# Spinner

<dl>
  <dt>원칙</dt>
  <dd>비동기 처리가 진행 중임을 알린다. Spinner는 <strong>intrusive</strong>하다 — 사용자의 주의를 빼앗고 콘텐츠 영역을 비운다. 덜 intrusive한 대안을 먼저 검토한다.</dd>
  <dt>대안 검토</dt>
  <dd>
    <table>
      <thead><tr><th>패턴</th><th>특징</th><th>이전 상태 유지</th><th>적합한 경우</th></tr></thead>
      <tbody>
        <tr><td>Skeleton</td><td>레이아웃을 유지하며 로딩 표시</td><td>✓ 형태 유지</td><td>목록·카드 초기 로딩</td></tr>
        <tr><td>Optimistic UI</td><td>성공 가정 후 실패 시 롤백</td><td>✓ 즉시 반영</td><td>좋아요·체크박스 등 즉각 반응</td></tr>
        <tr><td>인라인 Progress bar</td><td>페이지 상단 얇은 바</td><td>✓ 콘텐츠 유지</td><td>페이지 전환·라우팅</td></tr>
        <tr><td>버튼 disabled + 텍스트</td><td>Spinner 없이 상태만 표시</td><td>✓ 콘텐츠 유지</td><td>폼 제출 단순 케이스</td></tr>
        <tr><td>로컬 오버레이</td><td>해당 영역만 차단, 외부 인터랙션 유지. 구석 배치 시 인지 어려움</td><td>✓ 콘텐츠 유지 (흐림)</td><td>사용자 시선 안에 있는 주요 영역 갱신</td></tr>
        <tr><td>Spinner</td><td>명시적이나 콘텐츠 영역 점유</td><td>✕ 영역 비움</td><td>초기 로딩 대안이 없는 경우</td></tr>
      </tbody>
    </table>
  </dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>버튼 클릭 후 서버 응답 대기</p><p>페이지 또는 섹션 초기 로딩</p><p>파일 업로드·다운로드 (진행률 불명)</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>진행률을 알 수 있을 때 — Progress 사용</p><p>즉시 완료되는 동작 (200ms 미만)</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>버튼 내부에 사용할 때는 버튼 텍스트를 "처리 중..."으로 변경하고 <code>disabled</code>를 함께 적용한다. 전체 화면 로딩에는 단독으로 중앙 배치한다.</dd>
</dl>
