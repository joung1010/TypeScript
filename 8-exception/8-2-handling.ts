{
    class TimeoutError extends Error {

    }
    class OfflineError extends Error {

    }

    class NetworkClient{
        tryConnect(): void {
            throw new OfflineError();
        }
    }

    class UserService {
        constructor(private client:NetworkClient) {
        }

        login() {
            // 처음 사용한 login에서 에러를 핸들링하면
            // 에러가 발생했을때 어떠한 유의미한 처리를 할 수 없다.
            // 에러를 유의미하게 처리할수 없다면 catch로 잡지 않는것이 더 낫다.
            /*        try{
                    this.client.tryConnect();
                }catch (error){

                }

            *
            * */

            this.client.tryConnect();
            // login logic ....
        }
    }
// 에러를 처리할 때 그것을 처리할 수 있는 곳에서 처리하는 것이 좋다.
    class App {
        constructor(private userService:UserService) {
        }

        run() {
            try{
                this.userService.login();
            }catch (error){
                // show dialog to user
                // 어떠한 세부적인 에러타입을 확인하고 싶으면 Error state를 사용하는것 이좋다.
            }

        }

    }
// 에러의 핸들링은 그 에러가 발생했을때 어떤 유의미한 처리를 할 수 있는 곳에서 처리하는 것이 우아한 에러처리 방법이다.
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}