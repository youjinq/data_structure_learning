// output also {1 : dolphin; 2 : dog} -key pair by mutate head, key- two door

class Queues{
    constructor(){
        this.storage={}
        this.head=0;
        this.tail=0;
    }

    enqueue(element){
        this.storage[this.tail]=element;
        this.tail++
    }

    dequeue(){
        let removed = this.storage[this.head];
        delete this.storage[this.head];  
        this.head++;
        return removed;
    }



}

// try on map data structure
class QueuesMap{
    constructor(){

        this.storage = new Map();
        this.head=0;
        this.tail=0;
    }

    enqueue(element){
        this.storage.set(this.tail, element);
        this.tail++
    }

    dequeue(){
    this.storage.delete(this.head)
        this.head++;
    }



}


const q = new QueuesMap();

q.enqueue('searhorse');
q.enqueue('dolphin');
q.enqueue('tiger');

q.dequeue();
console.log(q);
