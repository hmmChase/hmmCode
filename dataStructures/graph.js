class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);

    return this;
  }
}

class Graph {
  constructor(root) {
    this.root = root;
  }
}

a = new Node(1);
b = new Node(2);
c = new Node(3);
d = new Node(4);
e = new Node(5);
f = new Node(6);
g = new Node(7);
h = new Node(8);
i = new Node(9);
j = new Node(10);

a.addChild(b).addChild(c);
b.addChild(g);
g.addChild(h).addChild(e);
h.addChild(i);
i.addChild(j);
c.addChild(d);
d.addChild(e);
e.addChild(f);
f.addChild(c);

/*
a (1) -> b (2) -> g (7) -> h (8) -> i (9) -> j (10)
v                 v
c (3) -> d (4) -> e (5) -> f (6) --v
^------------------
*/

gg = new Graph(a);

const visit = node => console.log(node.data);

// bigO (n)

const dfs = node => {
  if (!node) return;

  visit(node);

  node.visited = true;

  node.children.forEach(child => {
    if (!child.visited) dfs(child);
  });
};

// bigO (n)

const bfs = root => {
  const queue = [root];

  root.visited = true;

  while (queue.length > 0) {
    const node = queue.shift();

    visit(node);

    node.children.forEach(child => {
      if (!child.visited) {
        queue.push(child);

        child.visited = true;
      }
    });
  }
};

/*
Given a directed graph, design an algorithm to find out whether there is a route between two nodes
*/

const findRoute = (start, end) => {
  const queue = [];

  queue.unshift(start);

  start.marked = true;

  while (queue.length > 0) {
    const node = queue.pop();

    if (node === end) return true;

    node.children.forEach(child => {
      if (!child.marked) {
        queue.unshift(child);

        child.marked = true;
      }
    });
  }
  return false;
};
