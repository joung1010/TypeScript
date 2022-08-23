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

/* 자세한 것은 공식사이트 방문 : https://aka.ms/tsconfig
*   1. incremental : 변경되지 않은 파일은 유지한다.
*   2. target   : 어떤 버전으로 컴파일 할지 설정한다.
*   3. module : 모듈 정보를 어떻게 할 것인지 설정할 수 있다. -> 컴파일할때 모듈을 어떻게할 것인지 설정
*   4. lib : 별도로 설정하지 않으면 target 안에있는 모든 라이브러리를 사용가능
*   5. allowJs : 프로젝트에서 타입스크립트와 js파일을 같이 사용할 수 있는지 여부를 설정
*   6. checkJs : js파일에서 문법적인 오류를 잡아준다.
*   7. jsx : 리엑트 jsx파일에 관한 설정
*   8. declaration : 내가 작성한 코드를 라이브러리 형식으로 외부에 제공할 것이 아니라면 잘 사용하지 않음
*   9. sourceMap : 디버깅할때 유용하게 사용
*                   소스맵을 true하게되면 .map파일을 생성해서 js파일과 ts파일을 연결해준다.
*                   -> 크롬브라우저 F1 클릭후 Settings패널Preferences > Sources 아래
*                   Enable source maps는Enable JavaScript source maps 선택한다.
*   10. outFile : 다수의 타입스크립트 파일을 딱하나의 js파일료 만들때 사용
*   11. composite : 이전에 빌드된 정보를 기억하고 있어서 컴파일할때 더빠르게 진행(1.incremental 같이활용)
*   12. tsBuildInfoFile .incremental 가 true이면 이 관련된 정보들을 담을수 있는 파일을 지정
*   13. removeComments : 주석을 전부 삭제
*   14. noEmit : 컴파일 에러체크만하고 실제로 Javascript 코드로 변환하는 작업을 하지않음
*   15. importHelpers, downlevelIteration : 정말 이전버전으로 컴파일할때 좀더 안전하게 컴파일할 수 있는 모듈을 가져와서 컴파일
*   16. isolatedModules : 각각의 파일을 다른 모듈로 컴파일
*
* */



    class Car{
        engine = 0;

        move() {
            const engine = this.engine +1;
            console.log('engine!');
            console.log(engine);
        }
    }

const car = new Car();
car.move();