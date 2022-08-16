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
}
