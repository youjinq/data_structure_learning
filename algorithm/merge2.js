// second example
//  1. middle 2. push to array if both length exist 3. repeat 2

// 1 and 3 in merge sort function, 2 in merge functon 

function mergeSortTopDown(array) {
    if(array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}

function mergeTopDown(left, right) {
    const array = [];

    while (left.length && right.length) {
        if(left[0]< right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }

    // copy all remaining to array
    return array.concat(left.slice()).concat(right.slice());
}

(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log(mergeSortTopDown(testArray1))
    console.log(mergeSortTopDown(testArray2))
    console.log(mergeSortTopDown(testArray3))
})()