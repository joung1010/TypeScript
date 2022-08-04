{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT :number  = 7; // class level
        coffeeBeansGramm: number;   // instance (object) level

        constructor(coffeeBeansGramm:number) {
            this.coffeeBeansGramm = coffeeBeansGramm;
        }

        static makeMachine(coffeeBeans: number) {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots:number): CoffeeCup {
            if (this.coffeeBeansGramm < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error(`Not enjough coffee beans`);
            }
            this.coffeeBeansGramm -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            };
        }

    }


    const coffeeMachine = new CoffeeMaker(21);
    console.log(coffeeMachine);
    const coffeeCup = coffeeMachine.makeCoffee(2);
    console.log(coffeeCup);

    const coffeeMaker = CoffeeMaker.makeMachine(40);
    console.log(coffeeMaker);

}