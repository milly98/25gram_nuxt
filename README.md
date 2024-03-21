# 25gram_nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

# 이오그램 홈페이지 제작
#
# 1. Power Pages에서 원하는 페이지를 수정하거나 등록한다.
# 2. 수정한 페이지에서 코드편집을 클릭하고 해당하는 내용을 복사한다.
# 3. 25gram_nuxt 프로젝트의 component에 내용을 붙혀넣고 일부 수정한다.
#     - 수정 필요 내용 (필수) -
#     <template> 태그 안에 <div> 태그를 만들고 그 안에 내용을 넣어야 한다.
#     class 에 있는 row 는 무조건 지워야 한다.(max-width 문제)
#     이미지 url을 수정해야 한다.
# 4. npm run dev로 서버를 실행시켜 변경 내용을 확인한다.
# 5. (빌드) npm run build / npm run generate를 한 후 프로젝트의 dist 폴더의 내용을 복사한다.
# 6. (배포) 홈페이지 서버의 /home/eosam/25gram-homepage/public 디렉토리에 복사한 내용을 붙혀넣는다.
# 7. (결과) http://25gram.io 에 접속하여 배포 결과를 확인한다.