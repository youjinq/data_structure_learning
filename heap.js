// heap always implemeneted as array

// left child - i*2
// right child - i*2+1
// parent i-1/2

// let minHeap = function () {
//   let heap = [];

//   this.insert = function (num) {
//     heap.push(num);
//     if (heap.length > 2) {
//       // last index of heap = idx index
//       let idx = heap.length - 1;
//       while (heap[idx] < heap[Math.floor(idx / 2)]) {
//         //   if parent node =1; root
//         if (idx >= 1) {
//           // switch
//           [heap[Math.floor(idx / 2)], heap[idx]] = [
//             heap[idx],
//             heap[Math.floor(idx / 2)],
//           ];
//           if (Math.floor(idx / 2) > 1) {
//             idx = Math.floor(idx / 2);
//           }
//         } else {
//           break;
//         }
//       }
//     }
//   };
// };


class maxHeap{
  constructor(){
    this.data =[]
  }

  getparentIndex(i){
    return Math.floor(i-1/2);

  }

  getLeftchildIndex(i){
    return i*2+1
  }

  getRightchildIndex(i){
    return i*2+2
  }

  swap(i1,i2){
    [this.data[i1],this.data[i2]]=[this.data[i2],this.data[i1]];

  }


  // push -length
  push(key){
    // last key
    this.data[this.data.length] = key;
    this.heapifyUp();
  }

  // move up
  heapifyUp(){
    let currentIndex = this.data.length-1;

    while(this.data[currentIndex] > this.data[this.getparentIndex(currentIndex)]){
        this.swap(currentIndex, this.getparentIndex(currentIndex));
        
        currentIndex = this.getparentIndex(currentIndex);
    }
  }

// remove it and heapifydown
  poll(){
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length-1];
    this.data.length--;
    this.heapifyDown();

    return maxValue;
  }

  // swap the value for the next poll use
  heapifyDown(){
    // begin from top
    let currentIndex =0;

    // if lef is not undefined, let x = left element
    while(this.data[this.getLeftchildIndex(currentIndex)] !== undefined){
      let biggestChildrenIndex = this.getLeftchildIndex(currentIndex);

      // if right not undefined, right greater than left, let x = right
      if(this.data[this.getRightchildIndex(currentIndex)] !== undefined && this.data[this.getRightchildIndex(currentIndex)] > this.data[this.getLeftchildIndex(currentIndex)]){
        biggestChildrenIndex = this.getRightchildIndex(currentIndex);
      };

      // compare and swap if it is
      if(this.data[currentIndex] < this.data[biggestChildrenIndex]){
        // swap value within index
          this.swap(currentIndex,biggestChildrenIndex);
          // equal to next index to continute
          currentIndex = biggestChildrenIndex;
      } else {
        return;
      }
    }
  }

} 


const mheap = new maxHeap();

array = [25,5,40,,70,90,44];


array.forEach( x => mheap.push(x));

console.log(mheap);


let a = [];

a.push(mheap.poll());
// a.push(mheap.poll());
// a.push(mheap.poll());
// a.push(mheap.poll());
// a.push(mheap.poll());



console.log(mheap);

console.log('Top 5 items', a);