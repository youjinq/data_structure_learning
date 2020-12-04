// singly linked list - node to node-  next & prev important ; linkedlist- head and tail--
// one door one node to behind ; better push,search,delte
// node shape- value, next, rep; this.head like a red scqure for select


// singly linked_list - push; searchNode; delete   
// circular quite similar, just the last node point to this.head
class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

// head and tail
class LinkedList {
  constructor() {
    this.head = null;
    // extra
    this.count = 0;
  }



  // push node to end
  append(value) {
    const node = new Node(value);
    // current=alternative
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      // firs node is this.head
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }
    this.count++;

  }

  prepend(value) {
    const node = new Node(value);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      // dun know work or not
      const current = this.head;
      let previous = node;
      previous.next = current;
      this.head = previous;
    }

    this.count++;
  }

  // remove node at any position
  removeAt(index) {
    // check for out bound- ignore here -ensure index is within range
    let current = this.head;

    // delete first element
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;
      for (let i = 0; i < index; i++) {
        // previous = this.head now at certain node 9
        // 8
        previous = current;
        // 9
        current = current.next;
      }
      // 8->10
      previous.next = current.next;
    }

    this.count--;
    return current.value;
  }

  // get desired position of node
  getElementAt(index) {
    let current = this.head;
    for (let i = 0; i < index && current.next != null; i++) {
      current = current.next;
    }

    return current;
  }

  // insert at any position
  insert(value, index) {
    node = new Node(value);
    if (index === 0) {
      // like append
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      node.next = current;
      previous.next = node;
    }
    this.count++;
  }

  size() {
    return this.count;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(2);

// console.log(list.removeAt(1));
console.log(list.size());
console.log(list);

