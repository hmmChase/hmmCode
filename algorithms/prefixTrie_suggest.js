function suggest(prefix) {
  const suggestions = [];
  let currentNode = this;
  let index = 0;

  // Traverse down the trie until you get to the last letter of the prefix provided by the user
  while (index < prefix.length) {
    // if a node for that letter exists
    if (currentNode.children[prefix[index]]) {
      // Set that node to the currentNode
      currentNode = currentNode.children[prefix[index]];
    }
    index++;
  }

  // helper function to recursively search the branches of child nodes and add complete words as appropriate
  const addSuggestion = (node, prefix) => {
    if (node.completeWord) {
      if (node.popularity === 0) {
        suggestions.push(prefix);
      } else {
        suggestions.unshift(prefix);
      }
      // console.log('suggestions: ', suggestions)
    }

    const childNodes = Object.keys(node.children);
    // console.log('childNodes: ', childNodes);

    childNodes.forEach((child) => {
      const prefixChild = prefix + child;

      // console.log('node.children[child]: ', node.children[child]);
      // console.log('newString: ', newString);
      // console.log('-------');
      addSuggestion(node.children[child], prefixChild);
    });
  };

  // call the recursive function with initial arguments of the currentNode (the 'i' node in the case of the prefix 'pi') and the entire prefix itself. This function will concatenate on letters from its children and push to the suggestions array whenever a word is complete and will keep traversing down child branches until no child branches exist.
  addSuggestion(currentNode, prefix);

  return suggestions;
}
