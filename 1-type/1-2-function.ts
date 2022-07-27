{
/*    //JavaScript
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript
    function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript
    function fetchNum(id: string): Promise<number> {
        //code ..
        //code ..
        //code ..
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }*/

    // JavaScript -> TypeScript
    //Optional parameter ?
    // ? 를 붙이면 전달해도되고 안해도 된다.

    function printName(firstName: string, lastName?: string) {
        console.log(firstName );
        console.log(lastName);
    }
    //  lastName 을 :string| undefined 로 정의하면 무조건 2번째 인자를  undefined 이라도 전달해야한다.



    printName('Steve', 'Jobs');
    printName('mason');
    printName('Anna',undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

    printMessage();

    // Rest parameter
    function addNumbers(...numbers:number[]):number {
        return numbers.reduce((number, pre) => pre + number, 0);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2,3,4));
    console.log(addNumbers(1, 2,3,4,5,6));

}