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

const createMinHeightTree = array => {
  if (array.length === 0) return null;

  const middleIndex = Math.floor(array.length / 2);

  bst.add(array[middleIndex]);

  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex + 1, array.length);

  createMinHeightTree(leftArr);
  createMinHeightTree(rightArr);
};

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

createMinHeightTree(sortedArr);

module.exports = bst;

// bst.traverse();
