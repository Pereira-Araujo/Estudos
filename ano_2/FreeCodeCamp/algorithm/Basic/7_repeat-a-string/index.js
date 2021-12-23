function repeatStringNumTimes(str, num) {
  return str.repeat(num);
}

// OR

function repeatStringNumTimes(str, num) {
  let repetition = [];
  for (let i = 0; i < num; i++) {
    repetition.push(str);
  }
  return repetition.join("");
}

console.log(repeatStringNumTimes("abc", 3));
//return abcabcabc