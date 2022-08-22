// import sum,{print as printMessage} from './10-3-module1.js';
import * as calculator from './10-3-module1.js';


console.log(calculator.add(1, 3));
// printMessage();
calculator.print();
console.log(calculator.number);
// 기본적으로 module화 하지 않으면 global scope
// 따라서 다른 파일에서 이미 add 라는 함수가 정의되어 있어서 어느 add가 호출될지 알기 어렵다.
/*
function add(a, b) {
    return a* b;
}*/

// <script type="module" src="10-3-module2.js"></script> 모듈화를 하게 되면
// 위에 add 함수가 정의되어 있지 않기때문에 오류가 발생한다.

// export default 한 값은 사용자가 이름을 재정의할 수 있다.
// 그외에 다른 export들은 {export명 as 사용자정의 이름} 으로 재정의해서 사용할 수 있다.