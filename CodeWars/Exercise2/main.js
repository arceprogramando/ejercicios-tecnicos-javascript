/* Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
* For example n = 3 result in:
*
 */

function drawStairs(n) {
  let stairs = ''

  for( let i = 0 ; i < n ; i++) {
    stairs += ' '.repeat(i) + 'I';
    if (i !== n - 1) {
      stairs += '\n';
    }
  
  }

  return stairs;
}

const n = 3;
const result = drawStairs(n);
console.log(result)