function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let size = str.length;
  let start = alphabet.indexOf(str[0]);

  for (var i = start; i < start + size; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

// response: 'd'
