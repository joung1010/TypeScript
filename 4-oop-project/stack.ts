{
    interface Stack {
        push(item:any):void;
        pop():any;
    }

    class StringStack implements Stack {
        private item:{[key:string]:string} ={};
        private itemCnt:number = 0;
        constructor(private size:number) {
        }


        getItem() {
            return this.item;
        }

        private addItemCnt() {
            this.itemCnt += 1;
        }

        private deleteAddItemCnt() {
            if (this.itemCnt === 0) {
                throw new Error("Stact is Empty");
            }
            this.itemCnt -= 1;
        }

        push(item: string) {
            if (this.itemCnt === this.size) {
                throw new Error("Stack Size is Full");
            }
            this.addItemCnt();
            this.item[`${this.itemCnt}`] = item;
        }
        pop(): string {
            const itemId = this.itemCnt;
            this.deleteAddItemCnt();
            const res = this.item[itemId];
            delete this.item[itemId];
            return res;
        }
    }

    const stringStack = new StringStack(2);
    stringStack.push('test');
    stringStack.push('test2');
    console.log(stringStack.getItem());
     console.log(stringStack.pop());
     console.log(stringStack.getItem());
}