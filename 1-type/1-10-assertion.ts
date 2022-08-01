{
    /*
    *   Type Assertion (타입 강요):
    *   사용이 그렇게 좋지는 않다.
    * */
    // JS  함수이기때문에 TS는 return type을 전혀 알 수는 없지만
    // 이함수는 내부적으로 string 을 return 한다.
    function jsStrFunc(): any {
        // return 'hello';
        return 2;
    }
    const result = jsStrFunc();
    // console.log((result as string).length); // 형변환을 통해 string api를 사용

//  근데, 만약 이함수가 string 이 아닌 숫자를 return 하게 된다면
    // 타입을 확실하게 정해주었기 때문에 코드를 작성하는 시점에는 오류가 발생하지 않지만
    // 코드를 실행하는 시점에서 오류가 발생할 수 있다.
    // 따라서 정말 정말 100 퍼센트 확실한 경우에만 사용해야 된다.
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong : any = 5;
    console.log((wrong as Array<number>).push(1));
    // TypeError: wrong.push is not a function

    function findNumber(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumber()!;
    //변수 뒤의 ! 키워드는 무조건 값이 있다는것을 명시적으로 표현
    numbers!.push(1);
}