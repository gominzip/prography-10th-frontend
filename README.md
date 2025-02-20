# prography-10th-frontend

> ### 목차
>
> [1. 프로젝트 실행](#1-프로젝트-실행) <br>[2. 기능 구현 화면](#2-기능-구현-화면) <br> &nbsp;&nbsp;&nbsp;&nbsp;[2.1 홈 페이지](#21-홈-페이지) <br>&nbsp;&nbsp;&nbsp;&nbsp;[2.2 리크루팅 퍼널 페이지](#22-리쿠르팅-퍼널-페이지) <br>[3. 기술 스택 및 선정 이유](#3-기술-스택-및-선정-이유) <br>[4. 디렉토리 구조](#4-디렉토리-구조) <br>[5. 커밋 컨벤션](#5-커밋-컨벤션)

## 1. 프로젝트 실행

```bash
git clone https://github.com/gominzip/prography-10th-frontend.git
cd prography-10th-frontend

npm install
npm run dev
```

## 2. 기능 구현 화면

### 2.1 홈 페이지

#### 리쿠르팅 안내 및 소개

![image](https://github.com/user-attachments/assets/cdcc50bd-5d1c-4f37-ac20-38a515bad96b)

- 지원하기 버튼 클릭 시 `/recruit-form`으로 라우팅 됩니다.

### 2.2 리쿠르팅 퍼널 페이지

#### 스텝별 진행 및 입력값 검증

![검증](https://github.com/user-attachments/assets/b96456c6-91b4-4448-a5aa-06de24a3bb0a)

- 버튼을 통해서 다음, 이전 스텝으로 이동이 가능합니다.
- 필수 입력 항목이 없거나, 입력값이 정해진 형식에 맞지 않을 때 경고 표시를 제공합니다.
- 사용자가 현재 진행 중인 필드에 대해 border 색상을 변경하여 강조합니다.
- 프로그래스바를 통해 현재 진행 중인 스텝 단계를 확인합니다.

#### 제출 및 API 요청

![지원서제출](https://github.com/user-attachments/assets/970d0c80-0703-47c7-b92f-5a68e01e9f9f)

- 폼데이터 형식에 맞게 데이터가 세팅된 경우에만 제출하기가 가능합니다.
- 제출 전 컨펌 모달을 통해 다시 한번 입력값을 사용자에게 확인받습니다.
- api 요청에 대한 응답이 성공적이라면, 제출 완료 화면으로 넘어갑니다.

## 3. 기술 스택 및 선정 이유

| 기술                          | 선정 이유                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| `React`, `Vite`, `TypeScript` | 빠른 개발 환경과 타입 안정성(TypeScript) 확보를 위해 사용                                      |
| `tailwindcss`, `clsx`         | 빠른 개발을 위해 유틸리티 클래스 기반 스타일링 방식 선택. 조건부 클래스 관리(clsx)를 위해 사용 |
| `react-hook-form`, `zod`      | 폼 상태 관리를 효율적으로 처리하고, 입력값 검증을 위한 조합으로 사용                           |
| `axios`                       | 비동기 HTTP 요청을 간편하게 처리하기 위해 사용                                                 |
| `husky`, `lint-staged`        | 커밋 전(pre-commit) 자동 코드 린트 및 포맷 적용을 위해 사용                                    |
| `msw`                         | 실제 API가 없는 상황에서 Mocking을 통해 테스트 환경을 구축하고자 사용                          |

## 4. 디렉토리 구조

배럴 패턴을 도입하여 코드의 가독성을 높이고 모듈 관리를 용이하게 하였습니다.

작은 프로젝트이므로 과도한 디렉토리 분리는 피하고 구조를 간결하게 유지하고자 했습니다.

```bash
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┣ 📂images
 ┣ 📂components      # 재사용 가능한 UI 컴포넌트
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂lib             # 공용 라이브러리 및 유틸리티
 ┣ 📂mocks           # MSW 모킹 관련
 ┣ 📂pages           # 페이지 단위 컴포넌트
 ┃ ┣ 📂HomePage
 ┃ ┃ ┣ 📂components     # 홈 페이지 내부 UI 요소
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂RecruitFunnelPage
 ┃ ┃ ┣ 📂components       # 지원 폼 관련 UI 요소
 ┃ ┃ ┃ ┣ 📂fields        # 입력 필드 컴포넌트
 ┃ ┃ ┃ ┣ 📂steps         # 폼 단계별 컴포넌트
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂router
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ┗ 📜main.tsx

```

## 5. 커밋 컨벤션

| 타입     | 설명                         |
| -------- | ---------------------------- |
| feat     | 새로운 기능 추가             |
| fix      | 버그 수정                    |
| docs     | 문서 수정                    |
| style    | 코드 스타일 변경 (포맷팅 등) |
| design   | UI 디자인 변경 (CSS 등)      |
| refactor | 리팩토링                     |
| chore    | 의존성 추가, 자잘한 수정     |
| init     | 프로젝트 초기 세팅           |
