function titleCase(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split("");
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join("");
  }

  return arr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
// return "I'm A Little Tea Pot"