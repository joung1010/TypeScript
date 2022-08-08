{
    // 상속의문제점 : 다중 상속이 불가능하다
    // 내가 달달한 라떼 머신을 만들고 싶으면 class sweetLatte extends CaffeLatteMachine, SweetCoffeeMachine
    // 이렇게 사용하는 것이 불가능하다.

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

    class SweetCaffeLatteMachine extends CaffeLatteMachine, SweetCoffeeMachine {

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


}