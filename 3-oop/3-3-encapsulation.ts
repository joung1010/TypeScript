{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private
    // protected
    class CoffeeMaker {
       private static BEANS_GRAMM_PER_SHOT :number  = 7; // class level
        private _coffeeBeansGramm: number;   // instance (object) level

       private constructor(coffeeBeansGramm:number) {
            this._coffeeBeansGramm=  coffeeBeansGramm;
        }

        fillCoffeeBenas(coffeeBeans: number) {
            if (coffeeBeans < 0) {
              throw new Error('value for beans should be greater than 0');
            }
            this._coffeeBeansGramm += coffeeBeans;
        }

        static makeMachine(coffeeBeans: number) {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots:number): CoffeeCup {
            if (this._coffeeBeansGramm < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error(`Not enjough coffee beans`);
            }
            this._coffeeBeansGramm -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            };
        }
    }

    const maker =  CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBenas(32);

    class User {
        get fullName():string {
            return `${this.fisrtName} ${this.lastName}`;
        }
        private interAge  = 4;

        get age() : number {
            return this.interAge;
        }

        set age(age:number) {
            if (age < 0) {
                throw  new Error('vale for age should be greater than 0');
            }
            this.interAge = age;
        }

        // 생성자 함수의 파라미터에 접근제어를 설정하면 별도로 설정할 필요가 없다.
        constructor(private fisrtName: string,private lastName: string) {
        }
    }

    const user = new User('steve', 'jobs');
    user.age = 4;
    console.log(user.fullName);
    console.log(user.age)
}