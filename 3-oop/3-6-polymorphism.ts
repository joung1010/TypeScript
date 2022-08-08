{
    // 추상화 : 외부에서 어떤 형태로, 공통적으로 어떻게 이 클래스를 이용하게 할것인가... 이걸 고민하는 단계

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT :number  = 7; // class level
        private _coffeeBeansGramm: number;   // instance (object) level

        public constructor(coffeeBeansGramm:number) {
            this._coffeeBeansGramm=  coffeeBeansGramm;
        }

        fillCoffeeBenas(coffeeBeans: number) {
            if (coffeeBeans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this._coffeeBeansGramm += coffeeBeans;
        }
        clean() {
            console.log('cleanning the machine...');
        }

        static makeMachine(coffeeBeans: number) {
            return new CoffeeMachine(coffeeBeans);
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this._coffeeBeansGramm < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error(`Not enjough coffee beans`);
            }
            this._coffeeBeansGramm -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void {
            console.log('heating up...');
        }

        private extract(shots: number):CoffeeCup {
            console.log(`Pulling ${shots} shots...`)
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots:number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(coffeeBeansGramm:number,public serialNumber:string) {
            super(coffeeBeansGramm);
        }

        steamMilk():void {
            console.log('steamming some milk...');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            };
        }

    }

    class SweetCoffeeMachine extends CoffeeMachine{
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return{
              ...coffee,
                hasSugar : true,
            };
        }
    }

    const machines:CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeeMachine(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16,'2'),
        new SweetCoffeeMachine(16),
    ];

    machines.forEach(machine => {
        console.log('------------------------------------');
        machine.makeCoffee(1);
    })
    // 다형성의 장점: 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스를 구현하거나, 공통의 부모클래스를 상속했을때
    // 동일한함수를, 어떤 클래스인지 구분하지 않고 공통된 API 호풀할 수 있다는 것이 큰 장점이다.


}