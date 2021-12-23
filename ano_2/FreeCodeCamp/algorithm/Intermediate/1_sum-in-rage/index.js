function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let bet = 0;

  for (let i = min; i <= max; i++) {
    bet += i;
  }

  return bet;
}

console.log(sumAll([1, 4]));

// response : 10 (1+2+3+4)
