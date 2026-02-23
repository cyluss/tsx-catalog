# Dialog

<dl>
  <dt>원칙</dt>
  <dd>현재 흐름을 중단하고 사용자의 확인·입력을 요구할 때 사용한다. 남용하면 UX가 끊기므로 꼭 필요한 경우에만 쓴다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>삭제·초기화 등 되돌릴 수 없는 액션 확인</p><p>폼 입력이 필요한 팝업 (이름 변경, 초대)</p><p>상세 정보 오버레이</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>단순 알림 — Toast 사용</p><p>페이지 이동으로 해결되는 경우</p><p>중첩 다이얼로그 — 단계가 여러 개면 페이지에서 단계적으로 표시 (이전 선택을 가리지 않는 것이 핵심)</p><p>전체화면이 필요한 콘텐츠 — 페이지로 이동</p></div>
    </div>
  </dd>
  <dt>변형 선택</dt>
  <dd>
    <table class="compact">
      <thead><tr><th>사용 시점</th><th>변형</th><th>Bootstrap</th><th>shadcn/ui</th></tr></thead>
      <tbody>
        <tr><td>확인·입력, 화면 중앙</td><td>모달</td><td><code>Modal centered</code></td><td><code>Dialog</code></td></tr>
        <tr><td>모바일 확인, 액션 시트</td><td>하단 시트</td><td><code>Offcanvas bottom</code></td><td><code>Sheet side="bottom"</code></td></tr>
        <tr><td>필터, 설정 패널</td><td>측면 드로어</td><td><code>Offcanvas start/end</code></td><td><code>Sheet side="left/right"</code></td></tr>
        <tr><td>검색 바 확장</td><td>상단 시트</td><td><code>Offcanvas top</code></td><td><code>Sheet side="top"</code></td></tr>
      </tbody>
    </table>
  </dd>
  <dt>Sheet / Offcanvas 사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>필터·설정 등 부가 콘텐츠 패널</p><p>모바일에서 터치하기 쉬운 하단 확인 (bottom)</p><p>내비게이션 드로어 (side)</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>짧은 확인 메시지 — 모달이 더 집중도 높음</p><p>페이지 전환으로 해결되는 경우</p></div>
    </div>
  </dd>
  <dt>위치(placement / side)</dt>
  <dd><code>bottom</code> — 모바일 확인·간단한 액션 시트. <code>right</code>/<code>left</code> — 필터·설정 드로어. <code>top</code> — 검색 바 확장 (드물게 사용).</dd>
  <dt>선택 규칙</dt>
  <dd>액션 버튼은 Footer에 배치하고, 파괴적 액션(삭제)은 <code>variant="destructive"</code>로 구분한다. Sheet에 Footer가 없는 경우 Body 하단에 버튼을 배치한다.</dd>
  <dt>라우터 구현 권장</dt>
  <dd>아니오 — 열림 상태는 UI 상태로 관리한다. URL에 모달 상태를 노출하면 UX가 복잡해진다.</dd>
</dl>
