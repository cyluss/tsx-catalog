# 부서 CRUD

<dl>
  <dt>목적</dt>
  <dd>자기 참조 외래키(ADMRDEPT → DEPTNO)를 가진 테이블의 CRUD 예제. ON DELETE CASCADE 경고, 부모 부서 선택, 추가/수정/삭제 다이얼로그 조합 검증용.</dd>
  <dt>원본 DDL</dt>
  <dd>

```sql
CREATE TABLE DEPARTMENT
      (DEPTNO    CHAR(3)           NOT NULL,
       DEPTNAME  VARCHAR(36)       NOT NULL,
       MGRNO     CHAR(6)                   ,
       ADMRDEPT  CHAR(3)           NOT NULL,
       LOCATION  CHAR(16),
       PRIMARY KEY (DEPTNO))

ALTER TABLE DEPARTMENT
      ADD FOREIGN KEY ROD (ADMRDEPT)
          REFERENCES DEPARTMENT
          ON DELETE CASCADE
```

  </dd>
  <dt>사용 컴포넌트</dt>
  <dd>Table — 부서 목록 (DEPTNO, DEPTNAME, ADMRDEPT, LOCATION, 수정/삭제)<br>
  Dialog × 2 — 추가/수정 폼, 삭제 확인<br>
  Field + Input — DEPTNO, DEPTNAME, MGRNO, LOCATION<br>
  Select — ADMRDEPT (상위 부서, 자기 자신 제외)<br>
  Alert variant="destructive" — 하위 부서 존재 시 CASCADE 경고<br>
  Toast — 저장/삭제 성공 피드백</dd>
  <dt>선택 규칙 검증 포인트</dt>
  <dd>삭제 시 직계 하위 부서가 있으면 Alert로 CASCADE 경고. DEPTNO는 추가 시에만 편집 가능, 수정 시 readOnly. ADMRDEPT Select에서 자기 자신 제외.</dd>
</dl>
