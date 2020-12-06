
// obj to put array and obj within
const input =(index,value)=>{
    const obj = {};

    obj[index] = [index,value];

    obj[index+1] = {[index+1] : value};


    console.log(obj);

}

// map with it - different data type with same key is allowed
const input2 =(index,value)=>{
    const obj = new Map();

    // array key
    obj.set([index,value], value);

    // obj key
    obj.set({index,value}, value);

    // normal key
    obj.set(index, value);


    console.log(obj);

}


input(4,5);

input2(4,5);
