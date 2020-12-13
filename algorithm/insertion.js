// insertion algorithm-for with i=1; current save i value; j as index while=> swap to right; last put current at j+1   O(n)

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

        array[j+1]=current;
    }
    return array;

}


console.log(insertionSort([1, 5, 7, 2, 8]));
