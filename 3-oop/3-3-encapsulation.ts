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

       private constructor(coffeeBeansGramm) {
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

}