{
    /*
    *   Enum : 여러가지 연관된 상수값을 한곳에 모아서 정의할 수 있는 타입
    *   사욯하는경우 : 모바일 클라이언트와 소통할때 사용
    *                모바일 프로글밍 언어에서 union 타일을 표현할 수 없기때문에 공통의 enum 타입을 사용
    *   그외의 경우에는 union Type으로 대체해서 사용하자
    * */
//    JavaScript
//     JavaScript 에서는 별도의 enum 타입이 없기 때문에 const 대문자 형태로 표현한다.
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
//    만약 서로 관련된 데이터를 최대한 enum 과 가깝게 표현할려면 Object.freeze({});를 사용한다,
    const DAY_ENUM = Object.freeze({
       "MONDAY":0,
       "TUESDAY":1,
       "WEDNESDAY":2,
    });
    const dayOfToday = DAY_ENUM.MONDAY;

//    TypeScript
    enum Days1 {
        Monday='mon',
        Tuseday = 'tue',
        Wednesday ='wed',
        Thursday ='thu',
        Friday ='fri',
        Saturday ='sat',
        Sunday = 'sun',
    }
    // 별도의 값을 지정하지 않으면 0 부터 1씩증가하는 값을 가진다.
    // Monday = 1 로 값을 주면 그 이후 값들은 1씩 증가한 값을 가진다.
    console.log(Days1.Tuseday);
    const constDay = Days1.Friday;
    console.log(constDay);

    enum Days2 {
        Monday,
        Tuseday ,
        Wednesday ,
        Thursday ,
        Friday ,
        Saturday ,
        Sunday ,
    }
    // 이렇게 유용한 enum은 typescript 에서도 쓸만할까?
    // 결론적으로는 그렇지 않다.
    // enum의 Type을 지정하면 해당 변수는 enum type에 값만이 할당할 수 있는데
    // 이때 enum type 에 상수의 값에 해당하는 값들을 할당 할 수 있다.
    let day:Days2 = Days2.Tuseday;
    day = 10;
    // day = 10을 할당 했다 하지만 enum에 10에 해당하는 요일이 없는데도 오류가 발생하지 않는다.
    // 즉 enum을 사용하면 타입이 정확하게 보장되지 않는다.
    console.log(day);

//    또한 TypeScript에서는 enum 말고 union을 활용해서서 enum 대신해서 사용할 수 있다.

    type Days3 = 'Monday' | 'Tuesday' | 'Wednesday';

    let dayOfWeek: Days3 = "Monday";

}