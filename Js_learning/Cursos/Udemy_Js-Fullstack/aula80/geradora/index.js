function* generator1(){
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

const g1 = generator1()
console.log(g1) // Retorna o tipo

// A cada vez que é chamada , ela retorna um yield
console.log(g1.next()) // retorna o objeto 1
console.log(g1.next()) // retorna o objeto 2
console.log(g1.next()) // retorna o objeto 3