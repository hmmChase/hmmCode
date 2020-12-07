class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);

      return;
    }

    let node = this.root;

    while (node) {
      if (data <= node.data) {
        if (!node.left) {
          node.left = new Node(data);

          return;
        } else node = node.left;
      } else if (data > node.data) {
        if (!node.right) {
          node.right = new Node(data);

          return;
        } else node = node.right;
      }
    }
  }

  traverse(node = this.root) {
    if (node) {
      this.traverse(node.left);
      console.log(node.data);
      this.traverse(node.right);
    }
  }
}

const bst = new BST();

bst.add(10);
bst.add(8);
bst.add(8);
bst.add(11);
bst.add(9);

// console.log('bst:', bst);

bst.traverse();
