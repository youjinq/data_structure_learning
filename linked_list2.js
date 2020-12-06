// https://www.youtube.com/watch?v=41GSinwoMYA&ab_channel=Academind
// put newNode as const in every function
// analze the ouput -linkedlist: head,tail  ,value-index

class LinkedList{
    constructor(){
// this only rebuild back ds,pointless
        // this.nodes = [];
        // new list
        this.head = null;
        this.tail =null;

    }


    append(value){
        const newNode = {value, next: null};

        if(this.tail){
            // update tail.next; then reassign tail to new node
            this.tail.next =newNode;
        } 
        // replace this tail = to new Node
        this.tail = newNode;
        if(!this.head){
            // update tail.next; then reassign tail to new node
            this.head =newNode;
        }



    }

    prepend(value){
        // point to old head
        const newNode = {value, next: this.head};


        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;

        }

    }

    // delete with value
    delete(value){
        const newNode = {value, next: this.head};

        if(!this.head){
           return;
        } 

        // remove the first element if value is
        while(this.head && this.head.value == value){
            this.head = this.head.next;
        }

        let curNode = this.head;
        while(curNode.next){
            if(curNode.next.value == value){
                curNode.next = curNode.next.next;
            } else {
                curNode =curNode.next
            }
        }
    }

    find(value){
        if(!this.head){
            return;
        }

        while(curNode){

            if(curNode.value === value){
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
        
    }

    toArray(){
        const element = [];

        let curNode = this.head;

        while(curNode){
            element.push(curNode);
            curNode= curNode.next;
        }

        return element;

    }


}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(4);
linkedList.append(5);
linkedList.append(7);
linkedList.append(8);
linkedList.append(7);

linkedList.delete(7);



console.log(linkedList.toArray());

console.log(
    linkedList.find(8));
