class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);

    // Breadth first search
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) parent.children.push(node);
    else {
      if (!this.root) this.root = node;
      else return 'Tried to store not at root with root already exists';
    }
  }

  findBFS(data) {
    // const queue = [this.root];

    let _node = null;

    this.traverseBFS(node => {
      if (node.data === data) _node = node;
    });

    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        cb(node);

        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
}

const tree = new Tree();

tree.add('node1');
tree.add('node2', 'node1');
tree.add('node3', 'node1');
tree.add('node4', 'node2');
tree.add('node5', 'node2');
tree.add('node6', 'node3');

tree.traverseBFS(node => console.log('current node: ', node));

const inOrderTraversal = node => {
  if (node !== null) {
    inOrderTraversal(node.left);

    visit(node);

    inOrderTraversal(node.right);
  }
};

const preOrderTraversal = node => {
  if (node !== null) {
    visit(node);

    inOrderTraversal(node.left);

    inOrderTraversal(node.right);
  }
};

const postOrderTraversal = node => {
  if (node !== null) {
    inOrderTraversal(node.left);

    inOrderTraversal(node.right);

    visit(node);
  }
};
