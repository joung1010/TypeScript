{
    /*
    *   Type Inference(타입 추론) :
    * */

    let text = 'hello';  // text 라는 변수는 선언과 동시에 'hello'라는 문자열을 할당 했기때문에 Tyescript에서 자동으로 string type을 지정해준다.
    text = 'hi';
    // text = 1; // 에러 발생

    // 파라미터는 타입을 명시해주지 않으면 any type을 가진다.
    //default 값이 있으면 그 값을 통해 타입을 추론한다.
    function print(message = 'hello') {
        console.log(message);
    }

    print('hello');

    // 파라미터로 숫자 2개를 받아서 그값을 더한 것을 return 하면 typescript 에서 return type을 추론한다 (number)
    // 하지만 함수가 복잡해지면 그 타입을 추론하기 힘들기때문에 return type을 명시해주는 습관을 가지자
    function add(x: number, y: number): number {
        return x + y;
    }
    // 함수의 return 값이 number 기 때문에 result 변수의 타입도 추론을 통해 number가 된다.
    const result = add(1, 2);
}