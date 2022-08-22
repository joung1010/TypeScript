"use strict";
// tsc 컴파일 옵션
// outDir : 컴파일된 js파일의 생성 위치를 지정해줌 (기본적으로 현재폴더 ./)
// src 라는 폴더를 생성하고 그안에 ts 파일을 넣고 tsc 컴파일하게되면 build 안에 js파일이 생성된다.
// -> 프로젝트 안에서 가장 최상위 루트부터 처음으로 타입스크립트가 나오는 곳부터 상위폴더가 지정된다.
// 현재 프로젝트는 최상위 루트에는 ts 가 없기때문에 build안에 src 프로젝트가 없다.
// 1.
// src -> main.ts
// loggin -> loggin.ts
// build -> src     -> main.js
//       -> loggin  -> loggin.js
//2.
// src  -> main.ts
//      -> loggin -> loggin.ts
// build -> main.js
//      -> loggin -> loggin.js
// rootDir 루트 디렉토리를 설정한다. 그루트 밖에 ts파일을 생성할 수 없다.(루트 밖에 생성되면 에러 발생)
// File 'C:/all/TypeScript/11-config/app.ts' is not under 'rootDir' 'C:/all/TypeScript/11-config/src'. 'rootDir' is expected to contain all source files.
//컴파일 옵션 말고 다른옵션들
/*
*   config 파일에서   "compilerOptions":{},
*               "exclude": ["./src/dev.ts"] : 어떤 파일들을 컴파일할때 제외할지 설정
*                "include": [] : 내가 원하는 파일만 컴파일
*
*
* */
console.log('this is main.ts');
