// https://www.youtube.com/watch?v=cWNEl4HE2OE&ab_channel=Fireship

// dfs- recursive function
// bfs -enqueue and dequeue

// GIVEN
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// 2. REPRENSET A GRAPH- adjacent list or matrix
// A=> B C


// const adjacencyList={}
const adjacencyList = new Map();

// add new node -add key and empty array
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// add edge, undirected - connected to both way
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// create Graph
airports.forEach(addNode);

// ...route to destruct two args
routes.forEach(route => addEdge(...route))

console.log(adjacencyList);
// graph search algorithm

function bfs(start){

    const visited = new Set();
    const queue =[start];

    // keep looping- new set to prevent duplicate value
    while(queue.length >0){
        // remove it
        const airport = queue.shift();

        const destinations = adjacencyList.get(airport);

        // 
        for (const destination of destinations){

            if(destination === 'BKK'){
                console.log(`BFS found Bangkok!`)
            }
            // set prevent duplicated value
        if(!visited.has(destination)){
            visited.add(destination);
            queue.push(destination);
            console.log(destination);


        }


        }


    }
}

// dfs-recursive

function dfs(start, visited= new Set()){
    console.log(start);

    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations){

        if(destination === 'BKK'){
            console.log('DFS found Bangkok in steps');
            return;
        }

        if(!visited.has(destination)){
            dfs(destination,visited); 
        }
    }
}

// bfs('PHX');

dfs('PHX');
