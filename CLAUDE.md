# tsx-catalog

## 메타

- GitHub: `cyluss/tsx-catalog`
- GitHub Pages: `https://cyluss.github.io/tsx-catalog/`

## 역할

이 저장소는 UI 컴포넌트 카탈로그 뷰어다. 컴포넌트를 구현하는 곳이 아니다.

## 카탈로그 파일

```
public/catalog/
  {slug}.md           # 설계 문서 — 원칙, 사용 시점, 선택 규칙
  {slug}-rb.md        # React Bootstrap 구현 예제
  {slug}-shadcn.md    # shadcn/ui 구현 예제
  {slug}-tw.md        # 순수 Tailwind utility 구현 예제
  {slug}-bs.md        # 순수 Bootstrap utility 구현 예제
  index.json          # 슬러그 목록
```

## home.md 정렬 규칙

섹션 순서: 자주 참조하는 것 기준 (입력 → 액션 → 피드백 → 레이아웃 → 탐색 → 데이터 표시)

섹션 내 컴포넌트: 오름차순 (알파벳/가나다)

## 컴포넌트 추가 규칙

1. `index.json`에 슬러그 추가
2. 설계 파일(`{slug}.md`)을 먼저 작성한다 — 구현보다 설계가 먼저다
3. 구현 파일 4개(`{slug}-rb.md`, `{slug}-shadcn.md`, `{slug}-tw.md`, `{slug}-bs.md`)에 `jsx live` 블록을 포함한다

설계 파일 포맷:

```html
# 컴포넌트명

<dl>
  <dt>원칙</dt>
  <dd>...</dd>
  <dt>사용 시점</dt>
  <dd>
    <div class="do-dont">
      <div class="do"><strong>써야 할 때</strong><p>...</p></div>
      <div class="dont"><strong>쓰지 말아야 할 때</strong><p>...</p></div>
    </div>
  </dd>
  <dt>선택 규칙</dt>
  <dd>...</dd>
</dl>
```

## preview별 스코프

### shadcn preview (`-shadcn.md`, `-tw.md`)

| 식별자 | 내용 |
|--------|------|
| `Shad` | shadcn/ui (Button, Badge, Alert, Card 등) |
| `toast()`, `toast.success()`, `toast.error()` | sonner toast |
| `useScrollSpy(ids, container)` | 직접 구현한 IntersectionObserver 훅 |
| Tailwind CSS variables | `bg-primary`, `text-muted-foreground`, `border-border` 등 |

`-tw.md`에서는 `Shad.*` 컴포넌트를 사용하지 않는다. Tailwind utility 클래스만 사용한다.

### Bootstrap preview (`-rb.md`, `-bs.md`)

| 식별자 | 내용 |
|--------|------|
| `RB` | react-bootstrap 전체 |
| Bootstrap CSS | `d-flex`, `gap-2`, `btn`, `form-control` 등 utility 클래스 |

`-bs.md`에서는 `RB.*` 컴포넌트를 사용하지 않는다. Bootstrap utility 클래스만 사용한다.
`toast()` 와 `useScrollSpy`는 Bootstrap preview에서 사용 불가 — React state로 직접 구현한다.

## 개발

```bash
npm run dev    # 개발 서버
npm run build  # 빌드
```
