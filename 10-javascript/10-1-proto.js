const x = {};
const y = {};
console.log(x);  //[[Prototype]]: Object
console.log(y); //[[Prototype]]: Object
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);  // true
                                            // x 와 y는 동일한 object의 proto를 상속하고 있다.

const array = [];
console.log(array); //[[Prototype]]: Array(0)
                    // 이 Array proto 안에는 여러 함수들이 구현되어 있고 이안에 [[Prototype]]: Object 또한있다
                    // 이말은 변수 array 는 Array proto를 상속하고있고 이 Array 라는 proto는 Object proto를 상속하고 있다.
                    // 따라서 javascript에 모든 object들은 Object 라는 프로토를 가지고 있다.
                    // 그래서 모든 object에서 toString을 사용할 수 있는 이유가 여기에 있다.

console.clear();
function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level 만들어지는 객체마다 해당 기능을 가지고 있다.
    this.makeCoffee = ()=> {
        console.log(`making...`);
    }
}
// 만약이 makeCoffee를 객체들마다 가지고있는 것이아니라 딱 한번만 적의하고 싶다면 CoffeeMachine prototype에 접근해서 선언한다.
//Prototype member lelvel
CoffeeMachine.prototype.makeCoffeeInProtoType = () => {
    console.log(`making...`);
}
/*
                CoffeeMachine {beans: 10, makeCoffee: ƒ}
                beans: 10
                makeCoffee: ()=> { console.log(`making...`); }
                [[Prototype]]: Object
                makeCoffeeInProtoType: () => { console.log(`making...`); }
                constructor: ƒ CoffeeMachine(beans)
                    [[Prototype]]: Object
*/
const machine1 = new CoffeeMachine(10);
/*
*   beans: 10
    makeCoffee: ()=> { console.log(`making...`); }
    [[Prototype]]: Object
* */
const machine2 = new CoffeeMachine(10);

// 이변수 machine은 CoffeeMachine이라는 proto를 상속하고 있고 이 CoffeeMachine이라는 proto는 Object proto를 상속하고있다.
console.log(machine1)
console.log(machine2)

function LatteMachine(milk) {
    this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteeMachine = new LatteMachine('hotMilk');
console.log(latteeMachine);
latteeMachine.makeCoffeeInProtoType();