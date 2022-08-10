{
    function checkNotNullBad(arg: number|null):number {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    function checkNotNullAnyBad(arg: any|null):any {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }

    const resBad = checkNotNullBad(123);
    console.log(resBad);

    const number = checkNotNull(123);
    console.log(number);
    const string = checkNotNull('string');
    console.log(string);
    const boal:boolean = checkNotNull(true);
    console.log(boal);

}