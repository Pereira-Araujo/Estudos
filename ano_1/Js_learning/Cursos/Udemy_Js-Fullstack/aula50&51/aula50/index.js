//atribuição via desestruturação(array)

//exemplo 1 -------------------------
let a, b, c
;[a, b, c] = [1, 2, 3]

console.log(a, b, c)

//exemplo 2 -------------------------

const numeros = ['a', 'b', 'c', 'd', 'e', 'f']
const [first, second, third] = numeros // atribui um-a-um
const [...resto] = numeros // atribui todos os elemento à variavel 'resto'
const [um, dois, ...restante] = numeros //atribui um a um e depois todo o restante

//isso cria três variáveis com os valores 'a','b','c' respectivamente

console.log(first)
console.log(resto)
console.log(restante)

// exemplo 3 --------------------------

const [primeiro, , terceiro, , quarto] = numeros // os valores vazios são pulados e não atribuidos
console.log(primeiro, terceiro, quarto)
