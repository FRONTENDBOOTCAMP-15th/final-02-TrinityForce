# 2조: 삼위일체

[![동네책장 로고](./public/images/Logo.png)](https://trinityforce.vercel.app/)

## 동네책장
### **다 읽은 책, 버리지 마세요! 📚**

읽지 않는 책이 책장에 쌓여만 가고 있나요?

새 책을 사기엔 부담스럽고, 중고거래는 번거롭다면?

**동네책장**

*동네 사람들의 책이 모이는 곳*

동네책장은 이웃과 함께 책을 교환하는 플랫폼입니다.

읽은 책은 나누고, 읽고 싶은 책은 만나보세요.

<br>
<br>
<br>

## ⚙️ 기술 스택 및 개발 환경

<hr>

| 분류             | 툴                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **기술 스택**    | <img src="https://img.shields.io/badge/Tailwind-6d28d9?style=flat-square&logo=Tailwind&logoColor=white"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>                                                                                                                                                                                             |
| **UI/UX**        | <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>                                                                                                                                                                                                                                                                                                                 |
| **개발 환경**    | <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat-square&logo=VisualStudioCode&logoColor=white"/> <img src="https://img.shields.io/badge/vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>                                                                                                                                                                                         |
| **커뮤니케이션** | <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=Github&logoColor=white"/> <img src="https://img.shields.io/badge/GIT-F05032?style=flat-square&logo=GIT&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white"/> |
| **배포**         | <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/> |

<br>
<br>
<br>

## 📁 프로젝트 폴더 구조

<hr>

```
📦 final-02-TrinityForce
├── 📂 app                      # Next.js App Router
│   ├── 📂 _components          # 공통 클라이언트 컴포넌트
│   ├── 📂 alert                # 알림 페이지
│   ├── 📂 book-detail          # 도서 상세 페이지
│   │   └── 📂 [id]             # 동적 라우팅
│   ├── 📂 book-registration    # 도서 등록 페이지
│   ├── 📂 chat                 # 채팅 기능
│   │   ├── 📂 [roomId]         # 채팅방
│   │   ├── 📂 _api             # 채팅 API
│   │   ├── 📂 _components      # 채팅 컴포넌트
│   │   ├── 📂 _hooks           # 채팅 커스텀 훅
│   │   ├── 📂 _types           # 채팅 타입 정의
│   │   └── 📂 _zustand         # 채팅 상태 관리
│   ├── 📂 components/icons     # 아이콘 컴포넌트
│   ├── 📂 hooks                # 공통 커스텀 훅
│   ├── 📂 location             # 위치 설정 페이지
│   ├── 📂 meetup               # 모임 기능
│   │   ├── 📂 [id]             # 모임 상세
│   │   └── 📂 CreatingMeetup   # 모임 생성
│   ├── 📂 reviews/write        # 후기 작성
│   ├── 📂 search               # 검색 페이지
│   ├── 📂 splash               # 스플래시 화면
│   ├── 📂 user                 # 사용자 관련
│   │   ├── 📂 blocked          # 차단 목록
│   │   ├── 📂 exchange-list    # 교환 목록
│   │   ├── 📂 mypage           # 마이페이지
│   │   ├── 📂 profile-edit     # 프로필 수정
│   │   ├── 📂 recent           # 최근 본 도서
│   │   ├── 📂 reviews          # 내 후기
│   │   ├── 📂 signup           # 회원가입
│   │   └── 📂 wishlist         # 찜 목록
│   ├── globals.css             # 전역 스타일
│   ├── layout.tsx              # 루트 레이아웃
│   └── page.tsx                # 메인 페이지
│
├── 📂 components               # 공통 컴포넌트
│   ├── 📂 common               # 공통 UI 요소
│   ├── 📂 layout               # 레이아웃 (Header, Navigation)
│   ├── 📂 modals               # 모달 컴포넌트
│   └── 📂 ui                   # UI 컴포넌트
│
├── 📂 contexts                 # React Context
├── 📂 types                    # TypeScript 타입 정의
├── 📂 utils                    # 유틸리티 함수
├── 📂 zustand                  # Zustand 상태 관리
│
├── 📂 public/images            # 정적 이미지
├── 📂 docs                     # 프로젝트 문서
│   ├── 📂 01-requirements      # 요구사항 정의서
│   └── 📂 02-design            # 설계 문서
│
├── 📂 api                      # API 관련
│   ├── 📂 bruno                # Bruno API 테스트
│   └── 📂 dbinit               # DB 초기화 데이터
│
├── .env                        # 환경 변수
├── tailwind.config.ts          # Tailwind 설정
├── tsconfig.json               # TypeScript 설정
└── package.json                # 패키지 설정
```

<br>
<br>
<br>

## 👥 역할 분담

| ![로사](https://github.com/user-attachments/assets/9bda0697-6161-4afb-865b-e6ba2d1e2969)| ![나옹이](https://github.com/user-attachments/assets/63b903b4-307f-48e0-928b-7cb8ae425c35)|![로이](https://github.com/user-attachments/assets/c0a7e8e2-700c-485f-a431-2a26fa779315)|
|------|------|------|
| 김하연 | 조시연 | 이하영 |
| PM, 발표 | 서기 | PL |
| 도서 등록, 도서 목록 및 상세, 모임 목록 및 상세, 위치 권한 및 설정 | 로그인 및 회원가입, 검색바, 내정보, 후기 | 채팅, 알림 |

<br>
<br>
<br>

## 🖥️ 기술 구현 상세 및 기능 시연

<hr>

### 메인 홈

- **헤더:** 로고 메인페이지 이동 / 위치 재설정 기능 / 알림 목록
- **검색창:** 도서 검색 기능<br>
- **도서 목록:** 도서 상세페이지로 이동<br>
- **푸터:** 각각 홈, 모임게시판, 도서 등록, 채팅 목록, 내 정보로 이동하는 버튼
  <br>
  <br>

### 위치 재설정

### 로그인&회원가입

- **로그인:** 로그인 시 이메일 확인 → 회원일 시 비밀번호 입력 후 로그인 / 비회원일 시 비회원 문구 출력 후 회원가입(권한동의)<br>
- **회원가입:** 권한동의, 회원가입(필수 입력사항 미입력시 안넘어감)기능, 메인화면으로 이동<br>
- **권한 동의:** 모두 동의 박스 체크시 모든 input박스 체크 / 모든 박스 체크시 ‘계속’버튼 활성화 / 버튼 hover기능
  <br>
  <br>

### 상품 리스트

- **메인 카테고리별 상품 목록 조회:** 상단 햄버거 버튼을 누른 후 카테고리 버튼을 눌렀을 때도 누른 카테고리에 맞는 상품이 렌더링 됨.<br>
- **결과 텍스트 상품 개수와 연동:** 몇 개의 결과가 나오는지 알려주는 텍스트를 실제 리스트에 보이는 상품 개수와 동일하도록 만듦.<br>
- **페이지 처리 방식:** 스크롤 시 스크롤이 바닥에 닿았을 때 4개씩 추가로 상품이 더 보이도록 무한 스크롤 기능 추가
  <br>
  <br>

### 제품 상세

- **사이즈 선택 + 재고여부 확인:** 사이즈 선택 기능 연결 완료<br>
- **장바구니에 담기:** 로그인 시: 사이즈 선택 후 장바구니 추가 기능 연결 완료 / 비로그인 시: 로그인이 필요하다는 문구 출력<br>
- **위시리스트 추가:** 위시리스트 추가 기능 연결 완료<br>
- **추천 제품 목록:** 현재 보고 있는 제품의 카테고리와 일치하는 제품을 추천하는 기능 연결 완료
  <br>
  <br>

### 장바구니

- **장바구니 상품 목록 조회:** 장바구니에 담겨져 있는 상품의 목록들을 조회<br>
- **수량 수정:** 플러스, 마이너스를 버튼을 클릭 시 상품의 수량과 총 금액을 변경<br>
- **찜하기:** 빈 하트 아이콘 클릭 시 채워진 하트로 변경<br>
- **삭제:** 휴지통 아이콘 클릭 시 장바구니에서 해당 상품을 삭제
  <br>
  <br>

<br>

## 🔧 트러블슈팅

<hr>

| **문제** | **원인** | **해결 방법** |
| -------- | -------- | ------------- |
|  |  |  |
|  |  |  |
|  |  |  |

<br>
<br>
<br>

## 💡 회고 및 추후 보완하고 싶은 점

<hr>

| **팀원**      | **회고**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **추후 개선하고 싶은 점**                                                                                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **김하연** |   |  |
| **조시연** |  | |
| **이하영** |  | |

