{
    interface Stack<T> {
        readonly size: number;
        push(value: T):void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value:T;
        readonly next?: StackNode<T> ; // StackNode | undefined
    }

    class StackImpl<T> implements Stack<T> {
        private _size:number = 0;
        private head?: StackNode<T>;

        constructor(private capacity:number) {
        }

        get size() {
            return this._size;
        }

        push(value: T) {
            if (this._size === this.capacity) {
                throw new Error('Stack is full');
            }
            this._size++;
            const node: StackNode<T> = {value, next: this.head};
            this.head = node;
        }
        pop(): T { // null == undefined
            if (this.head == null) {
                throw new Error('Stack is Empty!');
            }
            const node  = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }

    }

    const stack = new StackImpl<string>(5);
    stack.push('Bob1');
    stack.push('Bob2');
    stack.push('Bob3');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }

    const stack2 = new StackImpl<number>(5);
    stack2.push(5);
    stack2.push(10);
    stack2.push(15);
    while (stack2.size !== 0) {
        console.log(stack2.pop());
    }

}