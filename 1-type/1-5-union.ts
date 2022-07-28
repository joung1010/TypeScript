{
    /*
    *  Union Types : OR
    * */
    // 발생할 수 있는 케이스중에 어떤 딱하나 값을 지정하고 싶을때 Union Type을 사용 한다.
    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }

    move('right');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 32;

    // function : login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    };
    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function login(id:string, password:string): LoginState {
        return {
            response: {
                body: 'log in!'
            }

        };
    }
    // printLoginState (state)
    // success -> print body
    // fail -> reason
    // state 안에 해당 인자 값이 있는지를 확인해서 처리한다.
    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`Good ${state.response.body}`);
        } else {
            console.log(`Sad ${state.reason}`);
        }
    }

}