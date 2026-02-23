카탈로그를 읽고 주어진 태스크를 구현한다.

## 실행 순서

1. `public/catalog/` 의 설계 문서(`*.md`, `-rb.md` / `-shadcn.md` 제외)를 전부 읽는다.
2. 태스크를 분석해 필요한 컴포넌트를 카탈로그에서 선택한다.
3. 각 컴포넌트의 "사용 시점"과 "선택 규칙"에 따라 구현한다.
4. `{slug}-shadcn.md`와 `{slug}-rb.md` 두 파일을 생성한다.
5. `{slug}.md` 설계 문서를 생성한다 (원칙, 사용 시점, 선택 규칙).
6. `index.json`에 슬러그를 추가한다.

## 카탈로그 준수 규칙

- 카탈로그에 없는 컴포넌트를 임의로 사용하지 않는다.
- `<input>`, `<button>`, `<select>` 태그를 직접 사용하지 않는다.
- `variant="primary"` Button은 화면에 하나만 사용한다.
- 오류 메시지는 `Alert variant="destructive"` (shadcn) / `Alert variant="danger"` (Bootstrap).
- 성공 피드백은 `toast.success()`.
- Switch는 저장 버튼 없이 즉시 반영.
- Select는 옵션 5개 이상일 때, 미만이면 Radio.

## 태스크

$ARGUMENTS
