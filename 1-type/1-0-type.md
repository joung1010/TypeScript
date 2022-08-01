## 타입 명시하기  
지정된 타입 말고 다른 타입은 할당이 불가능하다  
변수 선언 키워드(let, var, const) 변수명 : 타입 명시  ex) `const test:string = 'test';`

### 기본 타입 (number, string, boolean, int, bigint, symbol, null, undefined ...)  

##### 1.number
```
  const num : number = 6;
```  

##### 2.string
```
  const str : string = 'Only string';
```  

##### 3.boolean
```
  const bool : boolean = true;
```  

##### 4.undefined : 값이 있는지 없는지 모름  
```
  let name1: undefined = undefined // undefined 밖에 할당할 수 없기 때문에 이런식으로 사용하지 않는다.
  let age1 : number | undefined = 3; // 값이 있거나 아니면 정해지지 않았다.
  age1 = undefined;
```  

##### 5.null : 비어 있다.  
```
   let person : null; //null 밖에 할당할 수 없기때문에 이런식으로 사용하지 않는다.
   let person2: string | null;
```  

##### 6.unknown 어떤 종류의 데이터 타입이 올지 모른다. : 비어 있다.  
되도록이면 이 타입은 사용하지 말자! (타입이 명확하지않고 너무 포괄적이다.)  
존재 이유: 타입 스크립트에서 자바스크립트 라이브러리를 사용할때 어떤 타입인지 확실하지 않을때 사용한다.  
하지만, 이때도 되도록 타입을 정해 주는 것이 좋다.  
```
   let notSure:unknown = 0;
   notSure = 'not sure';
   notSure = true;
```  

##### 7.any : 어떤 타입이든 전부 담을 수 있다
되도록이면 이 타입은 사용하지 말자! (타입이 명확하지않고 너무 포괄적이다.)  

```
   let anything: any = 0;
   anything = 'anything';
```  

##### 8.void  : return 값이 없다.(생략 가능)

```
   function print():void {
        console.log('hello');
        return; // <- void type 
    }
```  

##### 9.never : return을 절대 하지 않겠다!

```
    function throwError(message:string):never {
        // message -> server (log) 서버에 전달해서 로그를 남긴다.
        throw Error(message);
    /*    while (true) {
        }*/
    }
```  

##### 10.object : 원시 타입을 제외한 모든 타입을 담을 수 있다.  
이런식으로 포괄적인 타입은 사용하지 않는 것이 좋다.
```
    let obj : object;

    function acceptSomeObject(obj: object) {

    }

    acceptSomeObject({name: 'mason'});
    acceptSomeObject({animal: 'dog'});
```  

### 함수에 타입 적용  

#### Javascript
```
 function jsAdd(num1, num2) {
        return num1 + num2;
    }
    
 function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }    
```  

#### TypeScript  
```
 function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    

 function fetchNum(id: string): Promise<number> {
        //code ..
        //code ..
        //code ..
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
```  

#### Optional parameter `?` 값을 전달해도 되고 안해도 된다.
```
  function printName(firstName: string, lastName?: string) {
        console.log(firstName );
        console.log(lastName);
    }
// 이때 만약 파라미터 lastName 을 :string| undefined 로 정의하면 무조건 2번째 인자를  undefined 이라도 전달해야한다.    

  printName('Steve', 'Jobs');
  printName('mason');
  printName('Anna',undefined);
```  

#### Default parameter  
```
  // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

    printMessage(); // default message 출력
```  

#### Rest parameter
```
  function addNumbers(...numbers:number[]):number {
        return numbers.reduce((number, pre) => pre + number, 0);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2,3,4));
    console.log(addNumbers(1, 2,3,4,5,6));
```  
  
### Array 타입

#### 기본 Array 타입  
`readonly` : 전달된 파라미터를 함수내에셔 변경하고 싶지 않을때 타입앞에 readonly를 붙인다.  
```
 const fruits:string[] = ['apple', 'banana'];
    const scores:Array<number> = [1, 2,];
    // 함수에서 전달 받은 파라미터를 변경하고 싶지 않을때 사용하는 readonly
    function printArray(fruits: readonly string[]) {

    }
```  

#### Tuple : 서로 다른 타입을 함께가질 수 있는 배열 --> interface, type alias, class 을 대신 사용  
좋게 사용한 예시 : React useState();  

```
    let students: [string, number];
    students = ['name', 123];
    students[0]; // name
    students[1]; // 123
```  
사용을 권장하지는 않는다. 그 이유는 배열에 값에 접근할때 인덱스를 통해서 접근하는데  
그 해당 배열에 어떤 값이 들어 있는지 확인하기가 힘들다.  
Tuple 대신 class 나 object 사용하면 student.name, student.age 처럼 좀더 명시적으로 접근이 가능하다.  
굳이 해결방법을 찾자면 디스트럭터(구조 분해 할당)를 하면된다.  
`const [name,age] = students;`  

### Type Aliases : 타입을 정의할 수 있다.  
원시 타입 뿐만 아니라 object 형태로도 정의할 수 있다.  
```
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
```  

#### String Literal Types  
```
    type Name = 'name'; // 타입을 특정 문자열 값으로 지정 했기때문에 이 타입을 가지는 변수는 그 타입에 해당하는 문자열값만 할당할 수 있다.
    let masonName: Name;
    masonName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
```  

### Union Types : `OR` 발생할 수 있는 케이스중에 어떤 딱하나 값을 지정하고 싶을때 Union Type을 사용 한다.  
```
   type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }

    move('right');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 32;

```  
  
Type Alias를 하나로 합쳐서 또 다른 Union Types을 만들 수 있다.  
```
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
```    
이때 로그인이 성공하면 response의 body내용을 실패했다면 reason을 출력하고 싶다.  
```
  function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`Good ${state.response.body}`);
        } else {
            console.log(`Sad ${state.reason}`);
        }
    }
```  
함수에 파라미터가 들어오는 시점에 타입이(SuccessState,FailState) 결정되기때문에  
response, reason 프로퍼티에 접근할 수 없다.  
따라서 state 안에 해당 인자 값이 있는지를 확인해서 처리한다.  

### 해결방법 discriminated : union을 사용할때 어떤 케이스든 공통적인 프로퍼티를 가지고 있으므로서 조금더 구분하기 쉽게 만든다.  
```
  type SuccessState = {
        result: 'success'; // 공통된 프로퍼티
        response: {
            body: string;
        }
    };
    type FailState = {
        result: 'fail'; // 공통된 프로퍼티
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

```    
공통된 프로퍼티를 통해서 조금더 구분하기 쉽게 만든다.  
```
 function printLoginState(state: LoginState) {
        // state.result; // success or fail
        if (state.result === 'success') {
            console.log(`Good ${state.response.body}`);
        } else {
            console.log(`Sad ${state.reason}`);
        }
    }
```  

### Intersecction Type : `& And` 다양한 타입을 하나로 묶을 수 있다.  
```
type Student = {
        name: string;
        score: number;
    };
    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.score,person.employeeId, person.work);
    }

    internWork({
        name:'mason',
        score:80,
        employeeId: 2345,
        work: () => console.log(`I'm working `),
    });

```  

### EnumType : 여러가지 연관된 상수값을 한곳에 모아서 정의할 수 있는 타입  
사용하는 경우 : 모바일 클라이언트와 소통할때 사용,  
모바일 프로글밍 언어에서 union 타일을 표현할 수 없기때문에 공통의 enum 타입을 사용  
**그외의 경우에는 union Type으로 대체해서 사용하자**  

#### JavaScript : JavaScript 에서는 별도의 enum 타입이 없기 때문에 const 대문자 형태로 표현한다.    
```
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    
//    만약 서로 관련된 데이터를 최대한 enum 과 가깝게 표현할려면 Object.freeze({});를 사용한다.
    const DAY_ENUM = Object.freeze({
       "MONDAY":0,
       "TUESDAY":1,
       "WEDNESDAY":2,
    });
    const dayOfToday = DAY_ENUM.MONDAY;
```  
  
#### TypeScript  
```
    enum Days1 {
        Monday,
        Tuseday ,
        Wednesday ,
        Thursday ,
        Friday ,
        Saturday ,
        Sunday ,
    }
    // 별도의 값을 지정하지 않으면 0 부터 1씩증가하는 값을 가진다.
    // Monday = 1 로 값을 주면 그 이후 값들은 1씩 증가한 값을 가진다.
    
    // 문자열 값도 할당 가능
        enum Days2 {
        Monday='mon',
        Tuseday = 'tue',
        Wednesday ='wed',
        Thursday ='thu',
        Friday ='fri',
        Saturday ='sat',
        Sunday = 'sun',
    }
```  
이렇게 유용한 enum은 typescript 에서도 쓸만할까?  
enum의 Type을 지정하면 해당 변수는 enum type에 값만이 할당할 수 있는데  
이때 enum type 에 상수의 값에 해당하는 값들을 할당 할 수 있다.  
```
    let day:Days2 = Days2.Tuseday;
    day = 10;
```  
day = 10을 할당 했다 하지만 enum에 10에 해당하는 요일이 없는데도 오류가 발생하지 않는다.  
**즉 enum을 사용하면 타입이 정확하게 보장되지 않는다.**  
또한 TypeScript에서는 enum 말고 **union을 활용해서서 enum 대신해서 사용할 수 있다.**  
```
    type Days3 = 'Monday' | 'Tuesday' | 'Wednesday';

    let dayOfWeek: Days3 = "Monday";
```  

  
