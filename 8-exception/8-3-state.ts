{

    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }
    type SuccessState = {
        result: 'success';
    }
    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient{
        tryConnect(): ResultState {
        }
    }

    class UserService {
        constructor(private client:NetworkClient) {
        }

        login() {
            this.client.tryConnect();
            // login logic ....
        }
    }
    class App {
        constructor(private userService:UserService) {
        }

        run() {
            try{
                this.userService.login();
            }catch (error){
                // 어떠한 세부적인 에러타입을 확인하고 싶으면 Error state를 사용하는것 이좋다.
            }

        }

    }
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}