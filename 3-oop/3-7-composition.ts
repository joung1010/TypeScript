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

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup:CoffeeCup):CoffeeCup ;
    }

    // 이렇게 클래스들끼리 타이트하게 연결되어있는 클레스들은 재사용성이 떨어진다
    // 클래스들의 의사소통은 그들의 계약서 규격사항인 인어페이스를 통해서 하는 것이 좋다.
    // 인터페이스를 통해 구현하면  해당 규격사항, 계약서를 따르는 즉, 특정 메소드를 반드시 구현하는 클레스
    // 이 인터페이스를 통해 의사소통하게 되면 다형성을 통해 좀더 유연한 느슨한 연결을통해 재사용성을 높일 수 있다.

    //싸구려 우유 거품기
    class CheapMiilkSteamer implements MilkFrother{
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

    class FancyMiilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log('Fancy steamming some milk...');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            }
        }
    }

    class ColdMiilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log('Fancy steamming some Cold milk...');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    //설탕 제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some suger from Candy');
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

    class SugarMixer implements SugarProvider{
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

    class Nosugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT :number  = 7; // class level
        private _coffeeBeansGramm: number;   // instance (object) level

        public constructor(coffeeBeansGramm:number
        ,private milk:MilkFrother
        ,private sugar:SugarProvider) {
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }


    // Milk
    const cheapMilkMaker = new CheapMiilkSteamer();
    const fancyMilkMaker = new FancyMiilkSteamer();
    const coldMilkMaker = new ColdMiilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new Nosugar();


    const sweetCandyMachine = new CoffeeMachine(12, noMilk,candySugar);
    const sweetMachine = new CoffeeMachine(12,noMilk, sugar);

    const latteMachine = new CoffeeMachine(12,  cheapMilkMaker,noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker,noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);



}