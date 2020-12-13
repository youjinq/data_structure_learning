// merger sort- break bigger into smallest ,then sort, and combine back 0(nlog n)

function mergeSort(array) {
  // check if it can be split
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2); // {2}
    // split into two sides and recursive to split
    const left = mergeSort(array.slice(0, middle)); // {3}
    const right = mergeSort(array.slice(middle, length)); // {4}

    array = merge(left, right); // {5}
  }
  return array;
}

function merge(left, right) {
  // create new array
  const result = [];
  // check if left and right is not empty to stop; to add to result
  while (left.length && right.length) {
    // check lower value
    if (left[0] <= right[0]) {
      //  add left value
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

//   take leftover and combine
  // merge left array
  while (left.length) result.push(left.shift());
  // merge right array
  while (right.length) result.push(right.shift());
  // return result array

  return result;
}




const mergesort1=(array)=>{
    if(array.length >1){
        let medium = Math.floor(array.length/2);
        const left = array.slice(0,medium);
        const right = array.slice(medium);

        array = merge1(mergesort1(left), mergesort1(right));

    }

    return array;
}

const merge1=(left,right)=>{
    let result =[];
    while (left.length && right.length){
        if (left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());

        }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}

console.log(mergeSort([1, 5, 7, 2, 8]));

console.log(mergesort1([1, 5, 7, 2, 8]));