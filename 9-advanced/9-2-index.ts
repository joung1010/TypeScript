{
    const obj = {
        name: 'mason',
    }
    //객체안에 있는 property에 접근하는 방법
    console.log(obj.name); //mason
    console.log(obj['name']); // mason

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name']; // string (Animal 타입에 name이라는 키에 해당하는 타입을 사용한다.)
    const text: Name = 'hello';

    type Gender = Animal['gender']; //'male' | 'female'

    type Keys = keyof Animal; // Animal에 있는 모든 키에해당하는 타입을 Keys에 할당한다.
                             // "name" | "age" | "gender"
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    }
    const person: Person = {
        name: 'mason',
        gender: 'male',
    }


}