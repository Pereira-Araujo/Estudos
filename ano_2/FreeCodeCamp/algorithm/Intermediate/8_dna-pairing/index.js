function pairElement(str) {
  // GC, CG, TA, AT
  return str.split("").map((letter) => {
    if (letter === "T") {
      return ["T", "A"];
    } else if (letter === "A") {
      return ["A", "T"];
    } else if (letter === "C") {
      return ["C", "G"];
    } else {
      return ["G", "C"];
    }
  });
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

/*
    response: 
    [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
    [ [ 'A', 'T' ],  [ 'T', 'A' ], [ 'C', 'G' ],  [ 'G', 'C' ], [ 'A', 'T' ] ]
    [ [ 'T', 'A' ],  [ 'T', 'A' ], [ 'G', 'C' ],  [ 'A', 'T' ],  [ 'G', 'C' ] ]
    [ [ 'C', 'G' ],  [ 'T', 'A' ],  [ 'C', 'G' ],  [ 'T', 'A' ],  [ 'A', 'T' ] ]
*/
