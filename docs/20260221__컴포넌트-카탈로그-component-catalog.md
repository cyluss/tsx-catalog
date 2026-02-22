# 컴포넌트 카탈로그 (Component Catalog)

## 이 문서의 역할

에이전트가 뼈대 컴포넌트를 만들 때 이 카탈로그를 먼저 읽는다. 카탈로그에 있는 컴포넌트를 새로 만들지 않는다. 카탈로그에 없는 컴포넌트가 필요한 경우 이슈를 통해 추가한다. 카탈로그와 실제 컴포넌트는 항상 동기화된 상태를 유지한다.

에이전트 지시: 이슈를 처리하기 전에 이 파일을 읽고 사용할 컴포넌트를 먼저 결정한다. 시각적 판단을 하지 않는다. 카탈로그의 "사용 시점"을 읽고 상황에 맞는 컴포넌트와 variant를 선택한다.

---

## 액션 (Action)

### Button

사용 시점: 사용자 액션을 트리거하는 모든 인터랙티브 요소에 사용한다. div나 span에 onClick을 붙이는 방식은 사용하지 않는다. 접근성과 키보드 탐색이 자동으로 보장된다.

```jsx
// 주요 액션: 저장, 제출, 확인처럼 페이지의 핵심 동작
<Button variant="primary">저장</Button>

// 보조 액션: 취소, 뒤로가기처럼 주요 액션을 보완하는 동작
<Button variant="secondary">취소</Button>

// 파괴적 액션: 삭제, 초기화처럼 되돌릴 수 없는 동작
<Button variant="danger" onClick={handleDelete}>삭제</Button>

// 비활성화: 폼 유효성 검사 실패, 로딩 중 중복 제출 방지
<Button variant="primary" disabled>저장</Button>

// 로딩 상태: API 호출 중 사용자에게 진행 중임을 알린다
<Button variant="primary" loading>저장 중...</Button>
```

선택 규칙: 한 화면에 variant="primary"는 하나만 사용한다. 주요 액션이 무엇인지 이슈의 성공 조건에서 판단한다.

---

### IconButton

사용 시점: 레이블 없이 아이콘만 표시하는 버튼이다. 반드시 aria-label을 붙여서 접근성을 보장한다.

```jsx
// 아이콘만 있는 버튼은 반드시 aria-label을 붙인다
// 스크린 리더 사용자가 버튼의 역할을 알 수 있어야 한다
<IconButton icon={<TrashIcon />} aria-label="삭제" onClick={handleDelete} />
<IconButton icon={<EditIcon />} aria-label="편집" onClick={handleEdit} />
```

---

## 피드백 (Feedback)

### Alert

사용 시점: 시스템 메시지, API 에러 응답, 폼 유효성 검사 결과를 사용자에게 알릴 때 사용한다. 인라인으로 페이지 내에 표시한다. 일시적인 알림은 Toast를 사용한다.

```jsx
// API 호출 실패, 서버 에러, 권한 없음 등
<Alert variant="danger">{error.message}</Alert>

// 저장 완료, 제출 완료 등 성공적인 동작 결과
<Alert variant="success">저장되었습니다.</Alert>

// 주의가 필요한 상태, 만료 임박, 용량 부족 등
<Alert variant="warning">저장 공간이 부족합니다.</Alert>

// 일반 안내 메시지, 사용 방법 설명 등
<Alert variant="info">이 설정은 다음 로그인부터 적용됩니다.</Alert>
```

선택 규칙: API 에러는 항상 variant="danger"를 사용한다. 에러 메시지는 error.message를 그대로 표시한다. 에러 문구를 에이전트가 임의로 만들지 않는다.

---

### Toast

사용 시점: 사용자 액션의 결과를 일시적으로 알릴 때 사용한다. 3초 후 자동으로 사라진다. 사용자가 놓쳐도 되는 보조적인 피드백에 사용한다. 중요한 에러는 Alert를 사용한다.

```jsx
// 훅으로 호출한다. 컴포넌트 JSX에 직접 넣지 않는다
const { showToast } = useToast();

// 저장, 복사, 완료 등 가벼운 성공 피드백
showToast({ message: "클립보드에 복사되었습니다.", variant: "success" });

// 네트워크 오류처럼 일시적인 문제
showToast({ message: "잠시 후 다시 시도해주세요.", variant: "danger" });
```

---

### Spinner

사용 시점: 데이터 로딩 중 또는 처리 중임을 표시한다. 단독으로 사용하거나 Button의 loading prop과 함께 사용한다.

```jsx
// 페이지 전체 또는 섹션 로딩 중
// aria-busy와 함께 사용해서 접근성을 보장한다
<div aria-busy="true">
  <Spinner />
</div>

// 인라인 로딩: 특정 데이터만 로딩 중일 때
<Spinner size="sm" />
```

---

## 레이아웃 (Layout)

### Card

사용 시점: 관련된 정보를 시각적으로 그룹화할 때 사용한다. 목록의 각 항목, 대시보드 위젯, 상세 정보 섹션에 사용한다.

```jsx
// 기본 카드: 제목과 내용을 그룹화한다
<Card>
  <Card.Header>
    <h2>사용자 정보</h2>
  </Card.Header>
  <Card.Body>
    <p>{user.email}</p>
  </Card.Body>
</Card>

// 액션이 있는 카드: 카드 단위로 편집, 삭제가 가능할 때
<Card>
  <Card.Header>
    <h2>사용자 정보</h2>
    <Card.Actions>
      <Button variant="secondary">편집</Button>
    </Card.Actions>
  </Card.Header>
  <Card.Body>
    <p>{user.email}</p>
  </Card.Body>
</Card>
```

---

### Modal

사용 시점: 현재 컨텍스트를 유지하면서 추가 정보를 입력받거나 확인을 요청할 때 사용한다. 삭제 확인, 간단한 폼 입력, 상세 정보 표시에 사용한다. 복잡한 흐름은 별도 페이지로 분리한다.

```jsx
// isOpen 상태는 부모 컴포넌트가 관리한다
// Modal 자체가 상태를 갖지 않는다
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="삭제 확인"
>
  <p>이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</p>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      취소
    </Button>
    <Button variant="danger" onClick={handleDelete}>
      삭제
    </Button>
  </Modal.Footer>
</Modal>
```

선택 규칙: 삭제 확인 Modal의 주요 액션은 항상 variant="danger"를 사용한다. 취소 버튼은 항상 왼쪽, 확인 버튼은 항상 오른쪽에 배치한다.

---

### PageLayout

사용 시점: 모든 페이지의 최상위 레이아웃에 사용한다. 헤더, 사이드바, 콘텐츠 영역을 일관되게 배치한다.

```jsx
// 모든 라우트의 페이지 컴포넌트는 PageLayout으로 감싼다
function UserListPage() {
  return (
    <PageLayout title="사용자 목록">
      {/* 페이지 콘텐츠 */}
    </PageLayout>
  );
}
```

---

## 데이터 표시 (Data Display)

### Table

사용 시점: 여러 항목을 비교하거나 목록을 표시할 때 사용한다. 항목이 5개 미만이면 Card 목록을 사용한다.

```jsx
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Header>이름</Table.Header>
      <Table.Header>이메일</Table.Header>
      <Table.Header>역할</Table.Header>
      {/* 액션 열은 항상 마지막에 배치한다 */}
      <Table.Header>액션</Table.Header>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {users.map((user) => (
      <Table.Row key={user.id}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.role}</Table.Cell>
        <Table.Cell>
          <Button variant="secondary">편집</Button>
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
```

---

### Badge

사용 시점: 상태, 카테고리, 태그를 인라인으로 표시할 때 사용한다. 클릭 가능한 필터는 Button을 사용한다.

```jsx
// 상태 표시: 활성화, 비활성화, 대기 중 등
<Badge variant="success">활성</Badge>
<Badge variant="danger">비활성</Badge>
<Badge variant="warning">대기 중</Badge>
<Badge variant="info">검토 중</Badge>
```

---

### EmptyState

사용 시점: 목록이나 테이블에 표시할 데이터가 없을 때 사용한다. 단순히 "데이터가 없습니다"를 텍스트로 표시하지 않는다.

```jsx
// 데이터가 없는 상태를 안내하고 다음 행동을 유도한다
<EmptyState
  title="사용자가 없습니다"
  description="새 사용자를 추가해서 시작하세요."
  action={
    <Button variant="primary" onClick={handleAdd}>
      사용자 추가
    </Button>
  }
/>
```

---

## 입력 (Input)

### TextField

사용 시점: 텍스트 입력이 필요한 모든 필드에 사용한다. input 태그를 직접 쓰지 않는다.

```jsx
// label은 항상 붙인다. placeholder만으로 레이블을 대체하지 않는다
// error prop이 있으면 에러 메시지를 필드 아래에 표시한다
<TextField
  label="이메일"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  placeholder="example@email.com"
/>
```

---

### Select

사용 시점: 미리 정의된 옵션 중 하나를 선택할 때 사용한다. 옵션이 5개 이하이면 RadioGroup을 고려한다.

```jsx
<Select
  label="역할"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  error={errors.role}
>
  <option value="admin">관리자</option>
  <option value="member">멤버</option>
  <option value="viewer">뷰어</option>
</Select>
```

---

## 탐색 (Navigation)

### Pagination

사용 시점: 목록이나 테이블에서 페이지 단위로 데이터를 탐색할 때 사용한다.

```jsx
// totalPages와 currentPage는 서버에서 받은 값을 그대로 사용한다
// 에이전트가 페이지 계산 로직을 직접 구현하지 않는다
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

---

### Breadcrumb

사용 시점: 계층이 2단계 이상인 페이지에서 현재 위치를 표시할 때 사용한다.

```jsx
<Breadcrumb>
  <Breadcrumb.Item href="/users">사용자 목록</Breadcrumb.Item>
  <Breadcrumb.Item>홍길동</Breadcrumb.Item>
</Breadcrumb>
```

---

## 카탈로그 관리 규칙

새 컴포넌트를 추가할 때는 이슈를 통해 처리한다. 이슈의 성공 조건에 "컴포넌트 카탈로그에 항목을 추가한다"를 포함한다. 카탈로그에 없는 컴포넌트를 에이전트가 임의로 만드는 것은 허용하지 않는다. 카탈로그에 없는 컴포넌트가 필요하다고 판단되면 이슈를 반려하고 컴포넌트 추가 이슈를 먼저 요청한다.

기존 컴포넌트의 variant나 props가 변경되면 카탈로그를 먼저 수정하고, 그 변경을 참조하는 이슈를 처리한다. 카탈로그가 코드보다 항상 먼저 업데이트된다.
