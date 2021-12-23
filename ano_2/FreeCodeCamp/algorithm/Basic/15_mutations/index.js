function mutation(arr) {
  let a = arr[1].toLowerCase();
  let b = arr[0].toLowerCase();

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) return false;
  }
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
//if second is contained in the first
