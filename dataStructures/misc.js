export class TreeNode {
  constructor(value) {
    this.value = value;
    this.parent = this.left = this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let node = this.root,
        branch;
      while (node) {
        branch = value <= node.value ? 'left' : 'right';
        if (!node[branch]) {
          break;
        }
        node = node[branch];
      }
      newNode.parent = node;
      node[branch] = newNode;
    }
  }
}

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    // this.size = 0;
    this.head = this.tail = null;
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      this.head = new LinkedListNode(value, this.head);
    }
    // this.size++;
  }

  append(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      this.tail = this.tail.next = new LinkedListNode(value);
    }
    // this.size++;
  }

  toArray() {
    let arr = [],
      node = this.head;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}

export function isBalanced(tree) {
  if (!tree) return true;

  const cache = {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER
  };

  findDepth(cache, tree, 0);
  return cache.max - cache.min <= 1;
}

// Approach: divide and conquer, array and insert into tree
var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function (array) {
  var bst = new BST();
  var q = new Queue();
  var currArr;
  var floor = Math.floor;
  q.add(array);
  while (!q.isEmpty()) {
    currArr = q.remove();
    bst.insert(currArr[floor(currArr.length / 2)]);
    if (currArr.slice(0, floor(currArr.length / 2)).length > 0) {
      q.add(currArr.slice(0, floor(currArr.length / 2)));
    }
    if (currArr.slice(floor(currArr.length / 2) + 1).length > 0) {
      q.add(currArr.slice(floor(currArr.length / 2) + 1));
    }
  }
  return bst;
};

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printLevelOrder();

var Graph = require('./../util/Graph');
var Queue = require('./../util/Queue');

// concurrently implement BFS on both sides of the graph
// intention is to minimise the levels that the graph has to search

var checkRoute = function (value1, value2, graph) {
  var q1 = new Queue();
  var q2 = new Queue();
  var visited1 = {};
  var visited2 = {};
  // insert values into qs
  visited1[value1] = true;
  visited2[value2] = true;
  if (graph.hasNode(value1)) {
    for (var edge in graph.findEdges(value1)) {
      q1.add(edge);
    }
  }
  if (graph.hasNode(value2)) {
    for (var edge in graph.findEdges(value2)) {
      q2.add(edge);
    }
  }
  // take turns dequeueing until empty
  var nextEdge1;
  var nextEdge2;
  while (!q1.isEmpty() || !q2.isEmpty()) {
    // if has queue, return true
    if (!q1.isEmpty()) {
      nextEdge1 = q1.remove();
      if (nextEdge1 === value2) {
        return true;
      }
      if (visited1[nextEdge1] === undefined) {
        visited1[nextEdge1] = true;
        if (graph.hasNode(nextEdge1)) {
          for (var edge in graph.findEdges(nextEdge1)) {
            q1.add(edge);
          }
        }
      }
    }
    if (!q2.isEmpty()) {
      nextEdge2 = q2.remove();
      if (nextEdge2 === value1) {
        return true;
      }
      if (visited2[nextEdge2] === undefined) {
        visited2[nextEdge2] = true;
        if (graph.hasNode(nextEdge2)) {
          for (var edge in graph.findEdges(nextEdge2)) {
            q2.add(edge);
          }
        }
      }
    }
  }
  // return false
  return false;
};

/* TEST */
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');

console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
console.log(checkRoute('B', 'A', graph), true);
console.log(checkRoute('D', 'E', graph), true);
