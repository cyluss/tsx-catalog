# Dialog

<dl>
  <dt>원칙</dt>
  <dd>현재 흐름을 중단하고 사용자의 확인·입력을 요구할 때 사용한다. 남용하면 UX가 끊기므로 꼭 필요한 경우에만 쓴다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>삭제·초기화 등 되돌릴 수 없는 액션 확인</p><p>폼 입력이 필요한 팝업 (이름 변경, 초대)</p><p>상세 정보 오버레이</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>단순 알림 — Toast 사용</p><p>페이지 이동으로 해결되는 경우</p><p>중첩 다이얼로그</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>액션 버튼은 Footer에 배치하고, 파괴적 액션(삭제)은 <code>variant="destructive"</code>로 구분한다.</dd>
</dl>
