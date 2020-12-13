// simple hashtable- like dictionary,   ice bucket with label irs [] -hash function ; hashtable; sir
// put;get;remove
// hash function- return index - ice bucket
const hash=(key,size)=>{

    let hashKey=0;

    for(let i=0; i< key.length;i++){

        hashKey+=key.charCodeAt(i);
    }
    //  when the size=20, the remainder return will only be max 19
    return hashKey % size;


}

class HashTable{
    constructor(key,value){
        this.size= 20;

        // this.bucket=[];
        this.bucket = Array(this.size);
        // this.bucket = Array();
        


        // use map or array here
        for(let i=0; i< this.bucket.length;i++){

            this.bucket[i]=new Map();
        }
    }

    print(){
        console.log(this.bucket);
    }

    // no conflit when many in an map; bcs the key is differnet, if it is same then will be overwritten
    put(key,value){
        let idx= hash(key,this.size);

        // this.bucket[idx]= new Map()

        this.bucket[idx].set( { [idx] : key},value);

        // size to check length of map- one value for a map- u can make double array

    }

    remove(key){
        let idx= hash(key,this.size);
        let deleted= this.bucket[idx].get(key);
        this.bucket[idx].delete(key)
        return deleted
    }

    get(key){
        let idx= hash(key,this.size);
        return this.bucket[idx];
    }
}

const table= new HashTable();

table.put('hello','moon');
table.put('bmx','mars');
table.put('justice','mecury');
table.put('mrt','mecury');


console.log(table.get('justice'));

table.print();

// console.log(table.bucket[19]);


