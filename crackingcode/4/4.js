class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = new Node(value);
    // if list is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    let cur = this.head;

    // only one or no item exists
    if (!cur) return null;
    if (!cur.next) {
      this.head = null;
      return cur;
    }
    // move till the 2nd last
    while (cur.next.next) cur = cur.next;

    let last = this.tail;
    this.tail = cur;
    this.tail.next = null;
    return last;
  }

  popFirst() {
    let first = this.head;
    if (this.head && this.head.next) {
      this.head = this.head.next;
      first.next = null;
    } else this.head = null;
    return first;
  }

  head() {
    return this.head;
  }

  removeAt(index) {
    let i = 0;
    let cur = this.head;
    let prev = null;

    while (cur != null) {
      if (i == index) {
        // remove
        if (prev == null) this.head = cur.next;
        else prev.next = cur.next;
        cur.next = null;
        return cur.value;
      } else {
        prev = cur;
        cur = cur.next;
        i++;
      }
    }
    return null;
  }

  insertAt(index, value) {
    if (index == 0) return this.prepend(value);
    let cur = this.head;
    let i = 0;

    while (cur != null) {
      if (i == index - 1) {
        let node = new Node(value);
        node.next = cur.next;
        cur.next = node;
        return true;
      } else {
        i++;
        cur = cur.next;
      }
    }
    return false;
  }

  tail() {
    return this.tail;
  }

  _toArray() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }

    return arr;
  }
}

class Queue {
  constructor() {
    this._list = new LinkedList();
  }

  enqueue(value) {
    this._list.append(value);
  }

  dequeue() {
    let node = this._list.popFirst();
    return node.value;
  }

  peek() {
    return this._list.head ? this._list.head.value : null;
  }

  isEmpty() {
    return this._list.head == null;
  }

  _toArray() {
    return this._list._toArray();
  }
}

// alias
Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;

var BST = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.printLevelOrder = function () {
  var level = [];
  var q = new Queue();
  var nextq = new Queue();
  var currNode;

  q.add(this);
  while (!q.isEmpty()) {
    currNode = q.remove();
    level.push(currNode.value);
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      console.log(level.join(','));
      level = [];
      q = nextq;
      nextq = new Queue();
    }
  }
};

var checkBalanced = function (bst) {
  // case where left is null and right is not null
  if (bst.left === null && bst.right !== null) {
    if (bst.right.left !== null || bst.right.right !== null) {
      return false;
    }
  }
  // case where left is not null and right is null
  if (bst.left !== null && bst.right === null) {
    if (bst.left.left !== null || bst.left.right !== null) {
      return false;
    }
  }
  // initialize answer variable as true
  var answer = true;
  //  if bst.left is not null, recursively call checkBalanced on bst.left
  if (bst.left !== null) {
    answer = answer && checkBalanced(bst.left);
  }
  //  if bst.left is not null, recursively call checkBalanced on bst.left
  if (bst.right !== null) {
    answer = answer && checkBalanced(bst.right);
  }
  // return answer
  return answer;
};

/* TEST */

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);

// ------------------------------------------------------------

// O(N) TIME --- O(log N) SPACE - WORST CASE O(N)
export function validateBalancedBT_1(tree) {
  if (!tree || !tree.root) return true;

  const depthCache = {
    minLevel: Number.MAX_SAFE_INTEGER,
    maxLevel: Number.MIN_SAFE_INTEGER
  };

  findTreeDepth(depthCache, tree.root);
  return depthCache.maxLevel - depthCache.minLevel <= 1;
}

function findTreeDepth(depthCache, node, depthLevel = 0) {
  if (!node) {
    if (depthLevel < depthCache.minLevel) depthCache.minLevel = depthLevel;
    if (depthLevel > depthCache.maxLevel) depthCache.maxLevel = depthLevel;
  } else {
    findTreeDepth(depthCache, node.left, depthLevel + 1);
    findTreeDepth(depthCache, node.right, depthLevel + 1);
  }
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// FIRST BOOK SOLUTION
// O(N log N) TIME

const getHeight = tree =>
  tree ? Math.max(getHeight(tree.left), getHeight(tree.right)) + 1 : -1;

export function validateBalancedBT_2(tree) {
  if (!tree || !tree.root) return true;
  return isBalanced(tree.root);
}

function isBalanced(tree) {
  if (!tree) return true;

  const heightDiff = Math.abs(getHeight(tree.left) - getHeight(tree.right));

  if (heightDiff > 1) return false;

  return isBalanced(tree.left) && isBalanced(tree.right);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// SECOND BOOK SOLUTION
// O(N) TIME AND SPACE

const checkHeightError = height => height === Number.MIN_SAFE_INTEGER;

export function validateBalancedBT_3(tree) {
  if (!tree || !tree.root) return true;
  return checkHeight(tree.root) !== Number.MIN_SAFE_INTEGER;
}

function checkHeight(tree) {
  if (!tree) return -1;

  const leftHeight = checkHeight(tree.left);
  if (checkHeightError(leftHeight)) return Number.MIN_SAFE_INTEGER;

  const rightHeight = checkHeight(tree.right);
  if (checkHeightError(rightHeight)) return Number.MIN_SAFE_INTEGER;

  const heightDiff = Math.abs(leftHeight - rightHeight);

  if (heightDiff > 1) return Number.MIN_SAFE_INTEGER;

  return Math.max(leftHeight, rightHeight) + 1;
}
