function chunkArrayInGroups(arr, size) {
  let container = [];

  while (arr.length > 0) {
    container.push(arr.splice(0, size));
  }

  return container;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// returns [[a,b], [c,d]]
