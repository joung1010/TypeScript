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


    //싸구려 우유 거품기
    class cheapMiilkSteamer {
        private steamMilk():void {
            console.log('steamming some milk...');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(coffeeBeansGramm: number
                    , public serialNumber: string
                    ,private milkFother: cheapMiilkSteamer)  // 필요한 기능을 외부에서 주입받는다 DI(Dependency Injection)
        {
            super(coffeeBeansGramm);
        }


        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }

    }

    //설탕 제조기
    class AutomaticSugarMixer {
        private getSugar() {
            console.log('Getting some suger from jar');
            return true;
        }

        addSugar(cup:CoffeeCup):CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            };
        }
    }


    class SweetCoffeeMachine extends CoffeeMachine{
        constructor( private beans:number
                    ,private sugar:AutomaticSugarMixer) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    // 즉 각각에 클레스에서는 본인이 필요한 것을 매번 구현하는 것이 아니라
    // 각각의 기능별로 클레스를 구현해서 필요한곳에서 가져다 쓰는 Composition 하는 것으로 구현해 보았다.
    // 지금 구조에서의 문제점은 주입 받는 기능들이 너무 단단하게 클레스들과 연결되어있다.
    // 이말은 나는 우유 거품기라면 어떤 것이든 상관 없는데 지금 상태에서는 오직 싸구려 거품기만을 사용해야되고
    // 클레스명이 바뀌게되면 해당 기능을 주입받는 클레스에 가서 모두 변경해줘야 된다.

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(
             private beans:number
            ,private milk:cheapMiilkSteamer
            ,private sugar:AutomaticSugarMixer) {
            super(beans);
        }


        makeCoffee(shots: number): CoffeeCup {
            const coffeeCup = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffeeCup);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    


}