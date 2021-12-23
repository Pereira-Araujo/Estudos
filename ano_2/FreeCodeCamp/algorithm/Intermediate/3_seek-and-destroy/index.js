function destroyer(arr, ...destroyerThese) {
  return arr.filter((elem) => !destroyerThese.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// response: [1,1]
// elimina todos os 2 e 3
