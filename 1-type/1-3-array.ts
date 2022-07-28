{
    // Array
    const fruits:string[] = ['apple', 'banana'];
    const scores:Array<number> = [1, 2,];
    // 함수에서 전달 받은 파라미터를 변경하고 싶지 않을때 사용하는 readonly
    function printArray(fruits: readonly string[]) {

    }

    // Tuple : 서로 다른 타입을 함께가질 수 있는 배열 --> interface, type alias, class
    // 좋게 사용한 예시 : React useState();
    let students: [string, number];
    students = ['name', 123];
    students[0]; // name
    students[1]; // 123
    // 사용을 권장하지는 않는다. 그 이유는 배열에 값에 접근할때 인덱스를 통해서 접근하는데
    // 그 해당 배열에 어떤 값이 들어 있는지 확인하기가 힘들다.
    // Tuple 대신 class 나 object 사용하면 student.name, student.age 처럼 좀더 명시적으로 접근이 가능하다.
    // 굳이 해결방법을 찾자면 디스턱팅 하면된다.
    const [name,age] = students;
}