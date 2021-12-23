function findLongestWordLength(str) {
  let arr = (str.split(" "))
  return Math.max( ...arr.map((word) => word.length));
  // Math.max(...) retorna maior valor do array
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
//return 6 , the biggest length word