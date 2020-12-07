const minHeightBST = require('../chapter4/2');
const LinkedList = require('../../dataStructures/linkedList');

// minHeightBST.traverse();

const depthlinkedLists = (node, lists = [], depthLevel = 0) => {
  if (node) {
    // if no linkedList for a depth, create one
    if (!lists[depthLevel]) lists[depthLevel] = new LinkedList();

    lists[depthLevel].push(node.data);

    depthlinkedLists(node.left, lists, depthLevel + 1);
    depthlinkedLists(node.right, lists, depthLevel + 1);
  }

  return lists;
};

const lists = depthlinkedLists(minHeightBST.root);

console.log('lists:', lists);
