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
    const node = this.root;

    // If no root node, create one
    if (node === null) {
      this.root = new Node(data);

      return;
    }

    const searchTree = node => {
      if (data < node.data) {
        // If left side doesn't exist, create it
        if (node.left === null) {
          node.left = new Node(data);

          return;

          // if it does exist
          // recursively go down the branch
          // until one doesn't exist
        } else if (node.left !== null) {
          return searchTree(node.left);
        }

        // same for other side
      } else if (data > node.data) {
        if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);

            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else return null;
      }
    };

    return searchTree(node);
  }
}
