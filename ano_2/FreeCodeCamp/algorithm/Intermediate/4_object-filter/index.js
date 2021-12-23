function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);

  return collection.filter((obj) => {
    return srcKeys
      .map((key) => {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce((a, b) => {
        return a && b;
      });
  });
}


// variaveis test
let arr = [
  { apple: 1, bat: 2 },
  { apple: 1 },
  { apple: 1, bat: 2, cookie: 2 },
  { bat: 2 },
];
let findMe = { apple: 1, bat: 2 };
// variaveis test


console.log(whatIsInAName(arr, findMe));
//response : [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
