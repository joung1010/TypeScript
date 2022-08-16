{
    type PositionType = {
        x: number;
        y: number;
    }

    interface PositionInterface {
        x: number;
        y: number;
    }

    interface PositionInterface2 {
        x: number;
        y: number;
    }

    // 1. type 과 interface  둘다 object 형태로 만들 수 있다.
    const obj1: PositionType = {
        x: 1,
        y: 1,
    }
    const obj2: PositionInterface = {
        x: 1,
        y: 1,
    }

    const obj3: PositionInterface2 = {
        x: 1,
        y: 1,
        z: 1,
    }

    // 2.1 type 과 interface  둘다 class 형태로 구현 가능(implements)
    class Pos1 implements PositionType {
        x: number;
        y: number;
    };

    class Pos2 implements PositionInterface {
        x: number;
        y: number;
    }

    // 2.2 Extends , intersection
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }

    type ZPositionType = PositionType & { Z: number };

    // 3.1 only Interface can be merged.
    interface PositionInterface2 {
        z: number;
    }

    // type PositionType{}

    // 3.2 Type aliases can use computed properties
    type Person = {
        name: string;
        age: number;
    }
    type Name = Person['name']; // Name 타입은 Person 안에 있는 name property의 타입을 사용한다.(string)
    type NumberType = number;
    type Direction = 'left' | 'right'; // union type

    // 4. 개념적인 측면에서의 차이점
    // interface 의 정의 :  어떤 것에 대한 규격사항, object 와 object의 의사소옽에서 정해진 interface 규격에 따라서 의사소통한다.
    // 따라서 어떤 특정한 규격을 정하고 그 규격을 통해서 구현된다면 (ex) 커피머신 인터페이스, 라떼 머신, 비싼 커피머신등...)
    // 인터페이스를 사용하는 것이 더 정확하다.

    //Types : 어떠한 데이터를 담을때 그 데이터의 모습을 정의하는 것이다.
    /*
    *   type PositionType = {
        x: number;
        y: number;
    }
    *   const pos: PositionType = {
        x: 1,
        y: 1,
    }
    * */
    // 만약 위의 예제를 interface로 정의해서 구현한다면 보는사람 입장에서 Postion이라는 class가 존재하나?? 라고 생각할 수 있다.
    // 따라서 어떠한 것을 구현하는게 목적이아니라 데이터를 담는 것을 목적으로 한다면 Type을 사용하는 것이 정확하다.
}
