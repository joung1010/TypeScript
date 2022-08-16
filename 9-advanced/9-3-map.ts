{
    type Video = {
        title: string;
        author: string;
    };
    // Video Type에 option이 추가되거나 추가적으로 재정의하게 된다면 재사용성이 떨어지게 된다.
/*    type VideoOptional = {
        title?: string;
        author?: string;
    };
    type VideoReadOnly = {
        readonly title: string;
        readonly author: string;
    };*/

    // [1, 2].map(item => item * item); // [1,4]
    // 위와 마찬가지로 map type을 사용하면 기존의 타입을 다른형태로 변환할 수 있다.
    type Optional<T> = {
        [P in keyof T]?:T[P] // for ... in 문법과 유사
                            // T 안에 있는 키들중 하나가 P
                            // 즉 모든 T의 키들이 하나 하나 씩 P에 담긴다.
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    };
    // VideoOptional
    type VideoOptional = Optional<Video>;
    const videoOp :VideoOptional = {
        title: 'videoOptional'
    }

    type Animal = {
        name: string;
        age: number;
    };

    const animal: Optional<Animal> = {
        age: 4,
    };
    animal.name = 'mason';

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'mason',
    }
    // video.title = 'hello';

    type Nullable<T> = {
        [P in keyof T]: T[P] | null
    };
    const ob2: Nullable<Video> = {
        title: 'hello',
        author: null,
    };

    type Proxy<T> = {
        get(): T;
        set(value:T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    };
}