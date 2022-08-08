{
    // 추상화 : 외부에서 어떤 형태로, 공통적으로 어떻게 이 클래스를 이용하게 할것인가... 이걸 고민하는 단계

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker{
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
                hasMilk: false
            };
        }
        makeCoffee(shots:number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    const maker:CoffeeMachine =  CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBenas(32);
    // 지금 CoffeeMaker 클래스를 보면 여러 함수들이 안에 있다.
    // makeCoffee , grindBeans, preheat, extract , fillCoffeeBenas
    // 사용자 입장에서 커피를 만들때 makeCoffee를 호출해야되는지 아니면 그전에 grindBeans preheat extract
    // 을 해야 되는지 알 수 없고 헷갈린다.
    // 이때 필요한것이 추상화이다.

    // 1. 접근제어자를 이용해서 외부에 노출시킬 함수만 public으로 설정한다.
    maker.makeCoffee(2);

    // 2. interface를 통한 추상화
    const maker2:CoffeeMaker =  CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBenas(32); // interface type인 CoffeeMaker 안에는 makeCoffee함수 밖에 없고 이 함수 말고는 사용할 수 없다.
    // 즉 interface를 이용하면 내가 얼마만큼의 행동을 약속, 보장할 것인지를 결정할 수 있다.
    maker2.makeCoffee(2);

}