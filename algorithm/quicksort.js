

// 1.pivot 2. partition- i <=j  3. repeat 1 and 2 with pivot decrease 1

// 1 and 2 in partition function, 3 in quicksortfunction
function quickSort(array, left, right) {
    // both index ,set at default
    left = left || 0;
    right = right || array.length - 1;

    // return left as pivot
    const pivot = parititon(array, left, right);

    // allow repeat on left
    if(left < pivot - 1) {
        quickSort(array, left, pivot - 1);
    }

    //  allow repeat on right
    if(right > pivot) {
        quickSort(array, pivot, right);
    }

    return array;
}

function parititon(array, left, right) {
    const pivot = Math.floor((left + right) / 2);

    while(left <= right) {
        // find index greater than pivot then stop on left
        while(array[left] < array[pivot]) {
            left++;
        }
        // find index less than pivot then stop on right

        while(array[right] > array[pivot]) {
            right--;
        }
// switch it if right still big than left
        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    return left;
}


(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log(quickSort(testArray1))
})()