// an object of integers, holding an array of other integers
// each integer in an array, represents an integer in the object list
class Graph {
  constructor() {
    // an object
    // key = integer
    // value = arrays, consisting of elements
    this.vertices = {};
  }

  // a vertex is a node in a graph
  // takes in an interger
  addVertex(key) {
    // in the object, create a key with the integer
    // make the value an empty array
    // must add the condition, else the keys value will be reset to an empty
    // array, if added again and there is already elements in the array
    this.vertices[key] = this.vertices[key] || [];
  }

  // edges are links to other vertices
  // takes in:
  // 1. the object key
  // 2. the integer to be added to the keys array value
  addEdges(key, ele) {
    this.vertices[key].push(ele);
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);
graph.addVertex(9);
graph.addVertex(10);
graph.addVertex(11);
graph.addVertex(12);
graph.addVertex(13);
graph.addVertex(14);
graph.addVertex(9);

graph.addEdges(1, 2);
graph.addEdges(1, 3);
graph.addEdges(2, 4);
graph.addEdges(4, 5);
graph.addEdges(4, 6);
graph.addEdges(6, 7);
graph.addEdges(7, 8);
graph.addEdges(7, 11);
graph.addEdges(3, 9);
graph.addEdges(3, 10);
graph.addEdges(9, 11);
graph.addEdges(9, 12);
graph.addEdges(9, 13);
graph.addEdges(11, 13);
graph.addEdges(11, 14);

console.log(graph);

// traverse graph, log each node val

// takes in graph,
const dfs = (graph, start, fn, visits) => {
  // get the object
  const vertices = graph.vertices;

  const visited = visits || {};

  console.log('start:', start);

  // fn(start);

  visited[start] = true;

  for (const neighbor of vertices[start])
    if (!visited[neighbor]) dfs(graph, neighbor, fn, visited);
};

// const logDFS = val => console.log(val);

dfs(graph, 1);

// dfs(graph, 1, logDFS);

// const bfs = (graph, start, fn) => {
//   const vertices = graph.vertices;

//   const queue = [start];

//   const visited = {};

//   visited[start] = true;

//   while (queue.length) {
//     const processVertex = queue.shift();

//     if (fn(processVertex)) return true;

//     for (const neighbor of vertices[processVertex])
//       if (!visited[neighbor]) {
//         visited[neighbor] = true;

//         queue.push(neighbor);
//       }
//   }
// };

// const logBFS = val => console.log(val);

// bfs(graph, 1, logBFS);

// is there a path between two vertices ?

// const pathBetween = (start, end, graph) => {
//   //1, 6
//   // const q = [start]; // [1]
//   // const marked = {};
//   // marked[start] = true; // {1: true}

//   // while(q.length) {
//   // 	const node = q.shift(); //1, 2, 4, 5, 6
//   // 	if(node === end) return true;

//   // 	for(const neighbor of graph.vertices [node]) { // [2,3] [4] [5,6]
//   // 		if(!marked[neighbor]) {
//   // 			marked[neighbor] = true; //{2:true}
//   // 			q.push(neighbor); //[2]
//   // 		}
//   // 	}
//   // }

//   function isMatch(node) {
//     return node === end;
//   }

//   if (bfs(graph, start, isMatch)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // pathBetween(4, 10, graph);
