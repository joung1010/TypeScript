{
    let COFFEE_BEEN : number= 3;

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

    coffeeMachine(4);
}