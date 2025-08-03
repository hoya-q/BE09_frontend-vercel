# BE09-Final-2team-FE

Next.js 15와 React 19를 기반으로 한 프론트엔드 프로젝트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.4.5 (App Router)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **HTTP Client**: Axios
- **Rich Text Editor**: CKEditor 5
- **Real-time Communication**: Socket.io Client
- **Icons**: Lucide React

## 📁 프로젝트 구조

```
BE09-Final-2team-FE/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (main)/             # 메인 페이지
│   │   ├── chat/               # 채팅 기능
│   │   ├── example/            # 예제 페이지 (공통 함수, API, 모달, CKEditor)
│   │   ├── post/               # 게시글 관련
│   │   ├── product/            # 상품 관련
│   │   ├── review/             # 리뷰 관련
│   │   └── user/               # 사용자 관련
│   ├── components/
│   │   ├── common/             # 공통 컴포넌트 (Header, Footer, ConfirmModal)
│   │   └── ui/                 # UI 컴포넌트 (Button, Dialog, Tabs, ScrollArea)
│   ├── lib/                    # 라이브러리 설정
│   │   ├── api.js              # Axios 설정 및 인터셉터
│   │   └── socket.js           # Socket.io 설정
│   └── utils/                  # 유틸리티 함수
│       └── format.js           # 포맷팅 함수
├── public/                     # 정적 파일
│   ├── fonts/                  # 폰트 파일
│   └── header/                 # 헤더 이미지
└── package.json
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

> 💡 **빌드 준비 완료 시 진행**

### 3. 빌드

```bash
npm run build
```

### 4. 프로덕션 서버 실행

```bash
npm start
```

## 📖 주요 기능

### 1. 예제 페이지 (`/example`)

프로젝트에서 사용할 수 있는 공통 기능들의 예제를 제공합니다.

- **공통 함수**: 유틸리티 함수 사용법
- **API**: Axios를 통한 API 호출 예제
- **모달**: ConfirmModal 컴포넌트 사용법
- **CKEditor**: 리치 텍스트 에디터 사용법

### 2. 페이지 구성

- **메인 페이지** (`/`): 메인 화면
- **채팅** (`/chat`): 실시간 채팅 기능
- **게시글** (`/post`): 게시글 관리
- **상품** (`/product`): 상품 관련 기능
- **리뷰** (`/review`): 리뷰 관리
- **사용자** (`/user`): 사용자 관리

### 3. 공통 컴포넌트

- **Header**: 네비게이션 헤더
- **Footer**: 푸터
- **ConfirmModal**: 확인/취소 모달
- **UI Components**: Button, Dialog, Tabs

## 🔧 환경 설정

### API 설정

`src/lib/api.js`에서 API 기본 URL을 설정할 수 있습니다:

```javascript
baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5501";
```

### 환경 변수

`.env.local` 파일을 생성하여 다음 환경 변수를 설정하세요:

```
NEXT_PUBLIC_API_URL=http://localhost:5501
```

## 📝 개발 가이드

### 1. 새로운 페이지 추가

`src/app/` 디렉토리 아래에 새로운 폴더를 생성하고 `page.jsx` 파일을 추가하세요.

### 2. 컴포넌트 추가

- 공통 컴포넌트: `src/components/common/`
- UI 컴포넌트: `src/components/ui/`

### 3. API 호출

`src/lib/api.js`에서 설정된 axios 인스턴스를 사용하세요:

```javascript
import api from "@/lib/api";

// GET 요청
const response = await api.get("/endpoint");

// POST 요청
const response = await api.post("/endpoint", data);
```

### 4. 모달 사용

```javascript
import ConfirmModal, { MODAL_TYPES } from "@/components/common/ConfirmModal";

// 모달 상태 관리
const [modalOpen, setModalOpen] = useState(false);
const [modalConfig, setModalConfig] = useState({
  title: "제목",
  message: "메시지",
  type: MODAL_TYPES.CONFIRM_CANCEL,
  onConfirm: () => {},
});
```

## 🎨 스타일링

프로젝트는 Tailwind CSS 4를 사용합니다. 커스텀 스타일은 `src/app/globals.css`에서 정의할 수 있습니다.

## 📱 반응형 디자인

모든 컴포넌트는 모바일, 태블릿, 데스크톱을 지원하는 반응형으로 설계되었습니다.

## 🔗 관련 링크

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Radix UI 문서](https://www.radix-ui.com/)
- [CKEditor 5 문서](https://ckeditor.com/docs/ckeditor5/latest/)

## 📄 라이선스

이 프로젝트는 비공개 프로젝트입니다.
