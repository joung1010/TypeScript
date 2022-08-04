{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT :number  = 7; // class level
        private _coffeeBeansGramm: number;   // instance (object) level

        constructor() {
        }


        get coffeeBeansGramm(): number {
            return this._coffeeBeansGramm;
        }

        set coffeeBeansGramm(value: number) {
            this._coffeeBeansGramm = value;
        }

        static makeMachine(coffeeBeans: number) {
            return new CoffeeMaker()._coffeeBeansGramm = coffeeBeans;
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
}