// First example O(n^2)

// assume the first is sorted compare first 2 element first, bigger copy to right,  last return  smaller value(leftmost+1 because minimal value j stop at -1)

const insertionSort=(array)=>{
    for(let i =1; i < array.length;i++){
        // init current =value at 1
        let current = array[i];
        // init j = 0
        let j = i-1;

        // copy bigger to left
        while(j >=0 && array[j] > current){
            array[j+1]= array[j];
            j--;
        }   

        // return current at last
        array[j+1]=current;
    }
    return array;

}


console.log(insertionSort([1, 5, 7, 2, 8]));
