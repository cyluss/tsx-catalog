# tsx-catalog

UI 컴포넌트 카탈로그 뷰어. 마크다운 파일 하나로 에이전트와 개발자가 동시에 읽을 수 있는 컴포넌트 문서를 작성한다.

## 실행

```bash
npm install
npm run dev
```

## 구조

```
public/catalog/
  index.json          # 컴포넌트 슬러그 목록
  {slug}.md           # 설계 문서 (원칙, 사용 시점, 선택 규칙)
  {slug}-rb.md        # React Bootstrap 구현 예제
  {slug}-shadcn.md    # shadcn/ui 구현 예제

src/
  App.tsx             # 메인 뷰어 (사이드바 + 콘텐츠)
  PreviewApp.tsx      # iframe 내부 미리보기 앱
  components/
    LiveIsland.tsx    # 에디터(좌) + 미리보기(우) 2분할 컴포넌트
  lib/
    parseMarkdown.ts  # 마크다운 → RenderUnit 파서
```

## 컴포넌트 추가

1. `public/catalog/index.json`에 슬러그 추가
2. `{slug}.md` — 설계 문서 작성 (dl/dt/dd 구조)
3. `{slug}-rb.md` — Bootstrap 구현, ` ```jsx live ``` ` 블록 포함
4. `{slug}-shadcn.md` — shadcn/ui 구현, ` ```jsx live ``` ` 블록 포함

## 설계 문서 포맷

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

## 라이브 에디터

`jsx live` 블록은 에디터와 미리보기로 렌더링된다. Bootstrap과 shadcn/ui는 별도 iframe에서 실행되어 CSS가 격리된다. 에디터에서 코드를 수정하면 미리보기에 실시간 반영된다.

미리보기에서 사용 가능한 스코프:

| 식별자 | 내용 |
|--------|------|
| `RB` | react-bootstrap 전체 |
| `Shad` | shadcn/ui 컴포넌트 (Button, Badge, Alert, Card 등) |
| `Button`, `Alert`, `Badge`, `Spinner` | 공통 스텁 |
| `useScrollSpy` | 커스텀 scroll spy 훅 (IntersectionObserver 기반) |

## 빌드

```bash
npm run build
```

`dist/`에 정적 파일이 생성된다. 별도 서버 없이 정적 호스팅으로 배포 가능하다.
