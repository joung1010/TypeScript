{
/*    let COFFEE_BEEN : number= 3;

    function coffeeMachine(shot: number) {
        while (shot >= 0) {
            if (COFFEE_BEEN === 0) {
                console.log(`커피콩이 부족합니다.`);
                break;
            }
            console.log("커피를 내립니다.");
            COFFEE_BEEN --;
            shot--;
            console.log(`남은 커피콩 ${COFFEE_BEEN}`);
        }
    }

    coffeeMachine(4);*/

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    const BEANS_GRAMM_PER_SHOT:number  = 7;
    let coffeeBeansGramm : number =0 ;

    function makeCoffee(shots:number):CoffeeCup{
        if (coffeeBeansGramm < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error(`Not enjough coffee beans`);
        }
        coffeeBeansGramm -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false
        };
    }

    coffeeBeansGramm += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);

}