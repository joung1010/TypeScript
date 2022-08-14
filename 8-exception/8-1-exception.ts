// Java : Exception
// Javascript : Error

// RangeError: Invalid array length < -- Error 발생 RangeError에러는 Error 를 상속한다.
// const array = new Array(1000000000000000000000000000000000000000000000000000000000000);


/*function move(direction:'up' | 'down' | 'left' | 'right' | 'he') {
    switch (direction) {
        case "up":
            position.y +=1;
            break;
        case "down":
            position.y -= 1;
            break;
        case "left":
            position.x -=  1;
            break;
        case "right":
            position.x += 1;
            break;
        default:
            const invalid:never = direction; // switch 문에서 he를 처리하지 않았기 때문에
            // invalid에 he 라는 값이 넘오온다 이는 never 타입이 아니기 때문에 컴파일 에러가 발생
            // 만약 위에서 처리하면 컴파일 에러가 발생하지 않는다.
            throw new Error(`unkown direction ${direction}`);
    }
}*/


// Error (Exception) Handling : try -> catch -> finally

function readFile(fileName:string):string {
    if (fileName === 'not exist') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents';
}

function close(file: string) {
    console.log('closed');
    //
}

function run() {
    const fileName = 'file';
    try { // 예상치 못한 에러가 발생하는 부분에서만 사용
        console.log(readFile(fileName));
    } catch (e){ // 에러가 발생했을때 처리
        console.log('catched!!');
        return;
    }finally { // 에러 발생 여부와 상관없이 무조건 처리해야만할때
        close(fileName);
    }
}
run();


