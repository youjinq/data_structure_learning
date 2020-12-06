// heap always implemeneted as array

// left child - i*2
// right child - i*2+1
// parent i/2

let minHeap = function () {
  let heap = [];

  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      // last index of heap = idx index
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        //   if parent node =1; root
        if (idx >= 1) {
          // switch
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          }
        } else {
          break;
        }
      }
    }
  };
};
