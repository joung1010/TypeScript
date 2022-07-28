{
    /*
    *   Type Aliases : 타입을 정의할 수 있다.
    *   원시 타입 뿐만 아니라 object 형태로도 정의할 수 있다.
    * */
    type Text = string;
    const name: Text = 'mason';
    const address: Text = 'Seoul';
    type num = number;

    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        name:'mason',
        age:13,
    };

    /*
    *   String Literal Types
    * */
    type Name = 'name'; // 타입을 특정 문자열 값으로 지정 했기때문에 이 타입을 가지는 변수는 그 타입에 해당하는 문자열값만 할당할 수 있다.
    let masonName: Name;
    masonName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
}