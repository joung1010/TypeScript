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
}