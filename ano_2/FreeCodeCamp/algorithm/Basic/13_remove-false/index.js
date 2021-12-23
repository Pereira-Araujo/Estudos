function bouncer(arr) {
  let noFalsy = [];
  for (let i = 0; i <= arr.length; i++) {
    if (Boolean(arr[i])) {
      noFalsy.push(arr[i]);
    }
  }
  return noFalsy;
}
// remove false, null, 0,"", undefined, NaN
console.log(bouncer([7, "ate", "", false, 9]));
//returns [7,'ate',9]
