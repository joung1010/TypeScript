console.log(this); // this -> window

function simpleFunc() {
    console.log(this);
}

simpleFunc(); // this -> window
console.clear();
class Counter {
    count = 0
    increase = function () {
        console.log(this);
    };
    arrowIncrease =  () => {
        console.log(this);
    };
}

const counter = new Counter();
counter.increase(); // this -> Counter

const caller = counter.increase;
caller(); //undefined
          // incrase의 메모리 주소값을 변수 caller에 할당한후에 caller를 호출하면
          // 이 해당 caller에서는 this의 정보를 잃어 버리게 된다
         // 왜냐하면 이 caller의 주소값에 있는 해당 코드 안에 this는 정의 되어있지 않기 때문이다.

// 추가 설명
// 우리가 선언한 함수는 기본적으로 window 객체에  정의하면 window 객체 등록이 된다.
//  window.simpleFunc();
//하지만 우리가 특정 변수를 선언하게되면 그 변수는 window 객체에 등록되지 않는다.
const mason = 'mason';
// console.log(window.mason); //undefined


// 예외적으로 var이라는 변수 선언 키워드는 window 객체에 등록이 된다.
var badVar = 'bob';
// console.log(window.badVar);  //bob

class Bob {

}
const bob = new Bob()
bob.run = counter.increase;
bob.run(); // Bob

// this 해겳 방법
// const caller2 = counter.increase.bind(counter);
// arrow function 사용하기
const caller2 = counter.arrowIncrease;
caller2();