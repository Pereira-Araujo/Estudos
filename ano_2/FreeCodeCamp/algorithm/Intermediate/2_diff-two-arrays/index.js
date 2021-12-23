function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) // junta os dois arrays em um
    .filter((item) => !arr1.includes(item) || !arr2.includes(item)); 
    
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// response :[ 4 ]
//  Retorna os elementos presentes em um só array e os concatena 

