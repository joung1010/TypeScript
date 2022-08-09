{
    // 추상클레스 : 이 클레스는 객체를 만들수 없다.
    // 공통된 기능들이 있다면 구현하고 자식들마다 달라져야하는 기능이 있다면  앞에 abstract라는 키워드로
    // 자식들에게 해당기능을 구현하도록 강제한다.

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
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

        protected abstract extract(shots: number): CoffeeCup;
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

        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots:shots,
                hasMilk:true,
            }
        }

    }

    class SweetCoffeeMachine extends CoffeeMachine{
        protected extract(shots: number): CoffeeCup {
            return {
                shots:shots,
                hasSugar:true,
            }
        }

    }

    const machines:CoffeeMaker[] = [
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeeMachine(16),
        new CaffeLatteMachine(16,'2'),
        new SweetCoffeeMachine(16),
    ];

    machines.forEach(machine => {
        console.log('------------------------------------');
        machine.makeCoffee(1);
    })


}