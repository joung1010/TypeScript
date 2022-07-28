{
    /*
    *  Intersecction Type : & And
    * 다양한 타입을 하나로 묶을 수 있다.
    * */

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
}