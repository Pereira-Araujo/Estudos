function confirmEnding(str, target) {
  return str.endsWith(target);
}

console.log(confirmEnding("Bastian", "n"));

// OR

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
//return true