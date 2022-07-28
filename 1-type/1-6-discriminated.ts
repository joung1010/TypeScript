{
    // union을 사용할때 어떤 케이스든 공통적인 프로퍼티를 가지고 있으므로서
    // 조금더 구분하기 쉽게 만든다.

    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    };
    type FailState = {
        result: 'fail';
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function login(id:string, password:string): LoginState {
        return {
            result:'success',
            response: {
                body: 'log in!'
            }

        };
    }


    function printLoginState(state: LoginState) {
        // state.result; // success or fail
        if (state.result === 'success') {
            console.log(`Good ${state.response.body}`);
        } else {
            console.log(`Sad ${state.reason}`);
        }
    }
}