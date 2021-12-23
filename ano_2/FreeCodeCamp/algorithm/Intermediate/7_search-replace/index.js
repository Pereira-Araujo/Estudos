function myReplace(str, before, after) {
  const myArr = str.split(" ");
  const [wordToReplace] = myArr.filter((item) => item === before);
  return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map((item) => (item === before ? after : item)).join(" ")
    : myArr
        .map((item) =>
          item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("Let us go to the store", "store", "mall"));
// response:
// He is Sitting on the couch
// Let us go to the mall
