// last apply on object

// see how big the stack with size
// exp outpu  { 1: cat; 2: fish - 1 door}

class Stack{
    constructor(){
        this.storage={},
        this.size =0
    }


    push(element){
        this.size++
        this.storage[this.size]= element;
    }

    // delete property
    pop(){
        let removed= this.storage[this.size];
        delete this.storage[this.size];
        this.size--
        return removed;
    }

    peek(){
        return this.storage[this.size];
    }
}



const stack = new Stack();

stack.push('dog');
stack.push('cat');
stack.push('bear');

stack.pop();
console.log(stack);