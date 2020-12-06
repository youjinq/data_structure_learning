// binatry search tree- in hierachy data structure- fast search,insert and delete-,amy recusion here

//  new node-left,value,right
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// count - create root
class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
      console.log(this.count);
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    // recursive function
    const searchTree = node => {
      // if value less than   node.value, go left
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          //  if left node; look again
        } else {
          searchTree(node.left);
        }
      }
      
      // if value less than   node.value, go right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    console.log(currentNode.value);

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    console.log(currentNode.value);

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while(currentNode){
        if (value === currentNode.value) {
            return true;
          }
      
          if (value < currentNode.value) {
            currentNode = currentNode.left;
          } else {
            currentNode = currentNode.right;
          }
      
    }
    return false;


  }

  // depth first search - branc by branch
  // return [] in order of  left-root-right
  dfsInOder() {
    let result = [];

    const traverse = node => {
      if (node.left) traverse(node.left);

      result.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }


  // in order-left node, rightnode; root-left-right
  dfsPreOrder() {
    let result = [];

    const traverse = node => {
      result.push(node.value);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // post order-left node, rightnode; left-right-root
  dfsPostOrder() {
    let result= [];

    const traverse = node => {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      result.push(node.value);
    };

    traverse(this.root);


    return result;
  }

  // breadth first search - level by level
  bfs() {
    // breadth width search

    let result = [];

    // push node to queue
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      // -1 in queue
      let currentNode = queue.shift();
      // result
      result.push(currentNode.value);

      // queue list
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);


bst.size();

console.log(bst);

bst.min();

bst.max();

// console.log(bst.contains(2));

// console.log(bst.dfsInOder());
// console.log(bst.dfsPreOrder());
// console.log(bst.dfsPostOrder());

console.log(bst.bfs());

