# 위니브 부트캠프 웹사이트

## 실행

```bash
npm install

npm run dev
```

## 배포

```bash
npm run deploy
```

이렇게 하고 다시 github에 들어가서 settings에서 custom domain을 다시 설정해주어야 합니다.

### 도메인 변경시

`public/CNAME`의 주소를 변경해주어야합니다.

## 데이터 구조

### 캠프 데이터 (`public/data/camp.json`)

현재 모든 캠프 데이터는 외부 URL로 연결되며, 내부 상세 페이지는 생성되지 않습니다.

```json
[
  {
    "url": "https://외부링크",  // 외부 URL
    "image": "/images/camps/kdt01.png",
    "type": "KDT",
    "title": "캠프 제목",
    "subtitle": "부제목",
    "description": "설명",
    "trainingPeriod": "상시",
    "open": true
  }
]
```

### 정적 페이지 생성

- `generateStaticParams`는 빈 배열을 반환하여 내부 상세 페이지를 생성하지 않습니다.
- 모든 캠프는 외부 링크로 리다이렉트됩니다.
- `/[id]` 페이지는 404 처리가 되어 있어 존재하지 않는 페이지 접근 시 안내 메시지를 표시합니다.

## 주의사항

~~`npm run deploy --production`를 하면 URL 자동 연결되는 줄 알았으나, 그렇지 않습니다. 수동으로 해주어야 합니다. 추후에 옵션 값이 무엇인지 확인이 필요합니다.~~

-> main에 push하면 자동으로 배포됩니다.

## 프로젝트 구조 변경 내역

### 2025년 1월 업데이트
- 메인 페이지에서 특정 2개 과정만 표시하도록 변경
- 내부 상세 페이지 제거 (모든 캠프가 외부 링크로 연결)
- 정적 페이지 생성 로직 최적화
- 404 처리 추가
- **동적 라우트 폴더 완전 제거**: `/src/app/[id]` 폴더 삭제
  - 이유: `output: export` 설정에서 동적 라우트 사용 시 `generateStaticParams()` 필수
  - 해결: 모든 캠프가 외부 링크이므로 내부 상세 페이지 불필요하여 폴더 자체 제거
