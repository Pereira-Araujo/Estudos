function uniteUnique(...arr) {
  // transforma o array
  const oneDimension = [...arr].reduce((list, sub) => list.concat(sub));
  // retira todo elemento igual
  return [...new Set(oneDimensional)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// response: [ 1, 3, 2, 5, 4 ]
