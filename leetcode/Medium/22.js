/*

22. Generate Parentheses
Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]


Constraints:

1 <= n <= 8

*/

/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = n => {
  if (n <= 1 || n > 8) return 'out of range';

  const result = [];

  console.log('result:', result);

  const combo = (openRem, closeRem, string) => {
    if (openRem > closeRem) {
      console.log('asdf');

      return;
    }

    if (openRem === 0 && closeRem === 0) {
      result.push(string);

      return;
    }

    if (openRem > 0) {
      console.log('open');

      combo(openRem - 1, closeRem, string + '(');
    }

    if (closeRem > 0) {
      console.log('close');

      combo(openRem, closeRem - 1, string + ')');
    }
  };

  combo(n, n, '');

  return result;
};

console.log(generateParenthesis(2));
