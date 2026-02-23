# Select

<dl>
  <dt>원칙</dt>
  <dd>미리 정의된 옵션 중 하나를 선택하게 한다. native select를 직접 쓰지 않는다.</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>옵션이 5개 이상인 선택</p><p>역할, 카테고리, 국가 등 목록 선택</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>옵션이 4개 이하 — RadioGroup 사용</p><p>다중 선택 — 별도 컴포넌트 사용</p></div>
    </div>
  </dd>
  <dt>라우터 구현 권장</dt>
  <dd>조건부 — 필터·정렬 용도일 때는 <code>?sort=name</code> 형태의 URL 파라미터와 연동한다. 폼 입력 용도일 때는 아니오.</dd>
</dl>
