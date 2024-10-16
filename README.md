# 실행

```bash
npm install

npm run dev
```

# 배포

```bash
npm run deploy
```

이렇게 하고 다시 github에 들어가서 settings에서 custom domain을 다시 설정해주어야 합니다.

## 도메인 변경시

`public/CNAME`의 주소를 변경해주어야합니다.

# 주의사항

~~`npm run deploy --production`를 하면 URL 자동 연결되는 줄 알았으나, 그렇지 않습니다. 수동으로 해주어야 합니다. 추후에 옵션 값이 무엇인지 확인이 필요합니다.~~ -> 해결 `npm run deploy`명령만 실행하면 자동으로 URL이 연결됩니다.
