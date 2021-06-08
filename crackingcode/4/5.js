var BinaryTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var validateBST = function (bt) {
  // traverse the tree depth first, while
  // using a array with stack like behavior to check each node's validity
  // * assume values do not repeat
  var validateRecurse = function (currBt, stackArr) {
    for (var i = 0; i < stackArr.length; i++) {
      if (
        stackArr[i].side === 'left' &&
        currBt.value > stackArr[i].node.value
      ) {
        return false;
      } else if (
        stackArr[i].side === 'right' &&
        currBt.value < stackArr[i].node.value
      ) {
        return false;
      }
    }
    var left =
      currBt.left === null
        ? true
        : validateRecurse(
            currBt.left,
            stackArr.concat([{ node: currBt, side: 'left' }])
          );
    var right =
      currBt.right === null
        ? true
        : validateRecurse(
            currBt.right,
            stackArr.concat([{ node: currBt, side: 'right' }])
          );
    return true && left && right;
  };
  return validateRecurse(bt, []);
};

/* TESTS */

var bt1a = new BinaryTree(5);
var bt1b = new BinaryTree(4);
var bt1c = new BinaryTree(6);
var bt1d = new BinaryTree(1);
var bt1e = new BinaryTree(100);

bt1a.left = bt1b;
bt1a.right = bt1c;
bt1b.left = bt1d;
bt1b.right = bt1e;

console.log(validateBST(bt1a), false);

var bt2a = new BinaryTree(5);
var bt2b = new BinaryTree(3);
var bt2c = new BinaryTree(6);
var bt2d = new BinaryTree(1);
var bt2e = new BinaryTree(4);

bt2a.left = bt2b;
bt2a.right = bt2c;
bt2b.left = bt2d;
bt2b.right = bt2e;

console.log(validateBST(bt2a), true);

// ------------------------------------------------------------------

// USES EACH NODE'S PARENT REFERENCE
// O(N) TIME --- O(log N) SPACE - WORST CASE O(N)

export function isValidBST_1(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST_1(tree.root);
}

function validateBST_1(node) {
  if (!node) return true;

  if (node.parent) {
    if (node.parent.left === node) {
      if (node.value > node.parent.value) return false;
    } else if (node.parent.right === node) {
      if (node.value <= node.parent.value) return false;
    }
  }

  return validateBST_1(node.left) && validateBST_1(node.right);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(log N) SPACE - WORST CASE O(N)

const isNumber = value => typeof value === 'number';

export function isValidBST_2(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST_2(tree.root);
}

function validateBST_2(node, minValue, maxValue) {
  if (!node) return true;

  if (
    (isNumber(minValue) && node.value <= minValue) ||
    (isNumber(maxValue) && node.value > maxValue)
  )
    return false;

  return (
    validateBST_2(node.left, minValue, node.value) &&
    validateBST_2(node.right, node.value, maxValue)
  );
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// ASSUMES NO DUPLICATE VALUES. THIS ALGORITHM WOULD STILL RETURN TRUE EVEN IF TO THE RIGHT THERE WAS AN EQUAL VALUE NODE.
/*
  EXAMPLE:
            10
          /   \
        10    10
*/

export function noDupesIsValidBST(tree) {
  if (!tree) throw Error('invalid tree');
  return validateBST_3(tree.root, { value: null });
}

function validateBST_3(tree, previous) {
  if (!tree) return true;

  if (!validateBST_3(tree.left, previous)) return false;

  if (previous.value !== null && tree.value < previous.value) return false;

  previous.value = tree.value;

  if (!validateBST_3(tree.right, previous)) return false;

  return true;
}
