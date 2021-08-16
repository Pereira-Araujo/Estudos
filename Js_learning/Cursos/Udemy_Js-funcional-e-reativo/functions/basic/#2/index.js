function bonaTagon(){
    console.log('bona tagon')
}

function BonaNokton(){
    console.log('bona nokton ')
}


function execute(fn) {
  fn(); // o parametro é uma função 
}

execute(bonaTagon)
execute(BonaNokton)


// funções retornando funções
function potention(base, exp){
    return Math.pow(base,exp)
}
const bits8 = potention(2,8)
console.log(bits8)

function functionReturn(a){
    return function(b){
       return a+b
    }
}
const suming = functionReturn(1)(2) // :-o !!!
console.log(suming)