{
    type Todo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<Todo>) {
        // todo.title = 'jaja'; Readonly type 이기 때문에 수정 불가능
        console.log(`title:${todo.title}, description:${todo.description}`);
    }
}