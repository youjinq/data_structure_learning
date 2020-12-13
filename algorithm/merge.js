// first example mergesort

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