function factorialize(num) {
  // WITH FOR
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

function factorialize(num) {
  // WITH RECURSION
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(5));
//return 120 (5x4x3x2)
