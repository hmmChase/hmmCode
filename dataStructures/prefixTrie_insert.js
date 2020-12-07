function insert(word) {
  const addWordToTrie = (node, word) => {
    // take the first letter of word
    const firstLetter = word[0];

    // check if there is node in the children array with a key of the first letter
    if (!node.children[firstLetter]) {
      // if not, create a node for the letter and add to the children object of the node using the first letter as the key
      node.children[firstLetter] = new Node();
    }

    // when the word gets down to one letter...
    if (word.length === 1) {
      // increment the wordCount
      this.wordCount++;
      // set as completed word
      node.children[firstLetter].completeWord = true;
    }

    if (word.length > 1) {
      // pass in the node we just created, and the word, minus the letter we just created a node for, and rerun the function
      addWordToTrie(node.children[firstLetter], word.slice(1));
    }
  };

  // runs first, pass in empty trie and word
  addWordToTrie(this, word);
}
