/*

890. Find and Replace Pattern
Medium


You have a list of words and a pattern, and you want to know which words in
words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that
after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters:
  every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern.

You may return the answer in any order.

aab

p(a), p(b), p(b)

pat = [a, a, b]
word = [m, m, e,]

patMap {
  a: m
  b: e
}

result = []

for (i=0; words.length -1; i++)

  word.split

  flag = true

  for (i=0; word.length -1; i++)

    if (!patMap[pat[i]]) {
      patMap[pat[i]] = word[i]
    } else
      if (!patMap[pat[i]] === word[i])
        flag = false
        break

  }

  if flag = true
    result.push(word)



patMap[a] = m

patMap[b] = e



Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]

Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.


Note:

1 <= words.length <= 50
1 <= pattern.length = words[i].length <= 20

*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

const findAndReplacePattern = (words, pattern) => {
  const result = [];

  for (let i = 0; i < words.length - 1; i++) {
    const wordArr = words[i].split('');

    const isMatch = check(wordArr, pattern);

    if (isMatch) result.push(words[i]);
  }

  return result;
};

const check = (wordArr, pattern) => {
  const patMap = {};

  const patternArr = pattern.split('');

  let isPatternMatch = true;

  for (let j = 0; j < wordArr.length; j++) {
    let patLetter = patternArr[j];

    if (!patMap[patLetter]) {
      patMap[patLetter] = wordArr[j];
    } else if (patMap[patLetter] !== wordArr[j]) {
      isPatternMatch = false;

      break;
    }
  }

  return isPatternMatch;
};

console.log(
  findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
);
