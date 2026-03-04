/** is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannout use additional datastructures? */

function isUnique(str) {
  let splitStr = str.split("");
  let hp = {};
  for (const char of splitStr) {
    if (hp[char]) {
      return false;
    } else {
      hp[char] = true;
    }
  }
  return true;
}

const str = "abcdd";
console.log(isUnique(str));
