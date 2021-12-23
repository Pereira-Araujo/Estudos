function getIndexToIns(arr, num) {
  arr.push(num);

  arr.sort((a, b) => a - b); // returns correct order, smaller to bigger
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
//returns [40,50,60]
