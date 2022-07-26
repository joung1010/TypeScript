## 타입스크립트란?
타입스크립트는 Microsoft 회사에서 만든 프로그래밍 언어  
어느 브라우저나, OS, 자바스크립트가 동작하는 환경리면 대체해서 사용할 수 있다.  
그것은 TypeScript가 완전히 새로운 언어가 아닌 superset of JavaScript  
즉, JavaScript를 한단계 감싸는 언어 이기 때문이다.  
JavaScript는 런타임 환경때 타입이 결정되는 dynamically typed 이 큰 특징이고 이러한 특징때문에 여러 런타임에 에러가 발생한 다는 문제가 있다.  
하지만 TypeScript가는 Statically Typed 으로 compile 시 에러를 찾을 수 있다.  
JavaScript를 통해서 객체지향을 구현할 수 있지만 TypeScript를 이용하면 class, interface, generics, types! 등 다양한게 이용할 수 있다.  
그래서 TypeScript로 코딩하게 되면 JavaScript 문법과 새로 추가되는 문법 뿐만아니라 JavaScript에는 없는 TypeScript 에만 있는 문법과 기능을 추가해서 코딩을 할 수 있다.  
JavaScript가 동작하는 환경이라면 어디든지 사용할 수 있는 이유는 TypeScript 코드를 JavaScript 코드로 transcompiles해야 되기 때문이다.  
이렇게 compile을 제공하는 compiler 에는 TypeScript 자체에서 제공되는 compiler와 Babel을 이용할 수 있다.  

## 타입스크립트가 뜨는 이유

1. JavaScript는 프로그래밍이 동작할때 타입이 결정되는 조금 위험한 언어이다.  
   반면 TypeScript는 타입이 정적으로 지정된다. 이 말은 우리 코딩을 할때 타입이 결정된다.  
   따라서 **즉각적으로 TYpe에 대한 오류를 확인할 수 있기 때문이다..**

2. **강력한 객체지향 프로그래밍이 가능하기 때문이다.**

## 타입스크립트의 3가지 포인트

1. JavaScript를 base로하기 때문에 JavaScript 에 대한 기본적인 지식이 필수!
2. TypeScript의 Type에 대한 이해
3. OOP에 대한 개념

## 타입스크립트 설치

[타입스크립트 공식사이트](https://www.typescriptlang.org/)  
설치 방법 : npm install -g typescript  
TypeScript 컴파일러 실행 명령어 : tsc  

 

