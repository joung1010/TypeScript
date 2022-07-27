{
    // Javascript 변수 선언 방법
    // let es6
    let name = 'hello';
    name = 'hi';
    //const
    const age = 6;
    // age = 5; 불가능

    /*
    *   Javascript
    *   Primitive :  number , string , boolean , bigint , symbol , null, undefined
    *   Object : function , array, ....
    * */

    // 타입 명시하기 : 지정된 타입 말고 다른 타입은 할당이 불가능 하다.
    // number
    const num : number = 6;

    // string
    const str: string = 'only string';

    // boolean
    const bool: boolean = false;

    // undefined : 값이 있는지 없느지 모름
    let name1: undefined ; undefined  //undefined 밖에 할당할 수 없기때문에 이런식으로 사용하지 않는다.
    let age1: number | undefined;  // 값이 있거나 아니면 정해지지 않았다.
    age1 = undefined;
    age1 = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null : 값이 비어있음
    let person : null; //null 밖에 할당할 수 없기때문에 이런식으로 사용하지 않는다.
    let person2: string | null;

    // unknown 어떤 종류의 데이터 타입이 올지 모른다.
    // 되도록이면 사용하지 말자!
    // 존재 이유 : 타입 스크립트에 자바스크립트 라이브러리를 사용할때  어떤 타입인지 잘 모를때 사용한다.
    // 하지만 이때도 되도록 타입을 정해 주는 것이 좋다.
    let notSure:unknown = 0;
    notSure = 'not sure';
    notSure = true;

    // any : 어떤 타입이든 전부 담을 수 있다!
    // 되도록이면 사용하지 말자!
    let anything: any = 0;
    anything = 'anything';

    // void return 값이 없다.
    function print():void {
        console.log('hello');
        return;
    }

    //  never : return을 절대 하지 않겠다!
    function throwError(message:string):never {
        // message -> server (log) 서버에 전달해서 로그를 남긴다.
        throw Error(message);
    /*    while (true) {

        }*/
    }

    // object : 원시 타입을 제외한 모든 타입을 담을 수 있다.
    // 이런식으로 포괄적인 타입은 사용하지 않는 것이 좋다.
    let obj : object;

    function acceptSomeObject(obj: object) {

    }

    acceptSomeObject({name: 'mason'});
    acceptSomeObject({animal: 'dog'});
}