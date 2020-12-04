// singly linked list - node to node-  next & prev important ; linkedlist- head and tail--
// one door one node to behind ; better push,search,delte
// node shape- value, next, repv


// singly linked_list - push; searchNode; delete
class Node {
  constructor(value,prev,next) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

// head and tail
class DBLinkedList {
  constructor() {
    this.head =this.tail = null;
    // extra
    this.count = 0;
  }

  // append node to its back
  append(value){
      // if list is empty
      if(!this.tail){
          this.head = this.tail = new Node(value)
      } else {
          // make a new variable and link back to new
          let oldTail = this.tail;
          this.tail = new Node(value);
          oldTail.next =  this.tail;
          this.tail.prev = oldTail;
      }
      this.count++;

  }

  // add to front
  prepend(value){
      if(!this.head){
          this.head = this.tail = new Node(value)
      } else {
          // make a new variable and link back to new
          let oldHead = this.head;
          this.head = new Node(value);
          oldHead.prev =  this.head;
          this.head.next = oldHead;
      }
      this.count++;

  }

  deleteHead(){
      if(!this.head){
          return null
      } else {
          // make a new variable and link back to new
          let removeHead = this.head;

          // deal with the head node
          if(this.head === this.tail){
              this.head = this.tail = null
          } else {
              this.head = this.head.next;
              this.head.prev= null;
          }
          this.count--;
          return removeHead.value;
      }
  }

  deleteTail(){
      if(!this.tail){
          return null
      } else {
          // make a new variable and link back to new
          let removeTail = this.tail;

          // if that is the only node in list
          if(this.head === this.tail){
              this.head = this.tail = null
          } else {
              this.tail = this.tail.prev;
              this.tail.next= null
          }
          this.count--;
          return removeTail.value;
      }
  }

  // search from head,slow
  search(value){
      let currentNode= this.head;

  while(currentNode){
      if(currentNode.value == value){
          return currentNode;
      }

      currentNode= currentNode.next;
  }
  return null;
  }

 

  size() {
    return this.count;
  }
}

let list = new DBLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(2);

// console.log(list.removeAt(1));
console.log(list.size());
console.log(list);

