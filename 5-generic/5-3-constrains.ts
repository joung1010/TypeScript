{
    interface Employee {
        pay():void;
    }

    class FullTimeEmployee implements Employee {
        pay() {
            console.log(`full time`);
        }

        workFullTime() {

        }
    }

    class PartTimeEmployee implements Employee {
        pay() {
            console.log(`part Time`);
        }

        workPartTime() {

        }

    }

    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다.
    function payBad(employee: Employee): Employee {
        employee.pay();
        return employee;
    }

    function pay<T extends  Employee>(employee: T):T  {
        employee.pay();
        return employee;
    }

    const mason = new FullTimeEmployee();
    const bob = new PartTimeEmployee();

    const masonAfterPay = payBad(mason);
    const BobAfterPay = payBad(bob);
    // 지금 현제에서 각각 클레스가 가지고있는 고유 메소드정보를 잃어 버린다.
    // 그이유는 pay 함수가 실행되고 return으로 Employee 인터페이스 타입으로 return 하기때문에이다.

    const obj = {
        name:'mason',
        age:20,
    }

    const obj2 = {
        animal:'dog',
    }

    function getValie<T,K extends keyof T,V >(obj: T,key:K):T[K] {
        return obj[key];
    }

    console.log(getValie(obj, 'name')); // mason
    console.log(getValie(obj, 'age')); // 20
    console.log(getValie(obj2, 'animal')); // 20
}