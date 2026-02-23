# 프로필 설정 페이지

<dl>
  <dt>목적</dt>
  <dd>카탈로그 컴포넌트를 실제 페이지 맥락에서 조합하는 예제. 카탈로그 기반 에이전트 구현 검증용.</dd>
  <dt>사용 컴포넌트</dt>
  <dd>Tabs — 기본 정보 / 알림 섹션 분리 (동일 수준 콘텐츠 전환)<br>
  Field + Input — 이름, 이메일 입력 (bare input 사용 금지)<br>
  Select — 언어 선택 (5개 옵션, RadioGroup 기준 초과)<br>
  Switch — 즉시 적용 알림 토글 (저장 버튼 불필요)<br>
  Button variant="default" — 저장 액션, 화면 내 하나<br>
  Alert variant="destructive" — 유효성 오류 인라인 표시<br>
  Toast — 저장 성공 일시적 알림</dd>
  <dt>선택 규칙 검증 포인트</dt>
  <dd>이름이 비어 있으면 Toast가 아닌 Alert 사용 (페이지 레벨 오류). 저장 성공은 Alert가 아닌 Toast 사용 (일시적 피드백). Switch는 저장 버튼 없이 즉시 상태 반영.</dd>
</dl>
