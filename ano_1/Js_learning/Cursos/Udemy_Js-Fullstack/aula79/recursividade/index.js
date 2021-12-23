const recursive = (max) => {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursive(max);
};
recursive(0);

// Fatorial de um número

const factorial =(number)=>{
 if(number === 0) return 1
 else return number*factorial(number-1)
}
console.log(factorial(0))

