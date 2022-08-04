{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    class CoffeeMachine {
        coffeeBeansGramm: number;
        BEANS_GRAMM_PER_SHOT :number  = 7;
        constructor(coffeeBeansGramm:number) {
            this.coffeeBeansGramm = coffeeBeansGramm;
        }

        makeCoffee(shots:number): CoffeeCup {
            if (this.coffeeBeansGramm < shots * this.BEANS_GRAMM_PER_SHOT) {
                throw new Error(`Not enjough coffee beans`);
            }
            this.coffeeBeansGramm -= shots * this.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            };
        }

    }


    const coffeeMachine = new CoffeeMachine(21);
    const coffeeCup = coffeeMachine.makeCoffee(2);
    console.log(coffeeCup);

}