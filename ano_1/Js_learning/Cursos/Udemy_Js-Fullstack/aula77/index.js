//Função construtora  = objetos
//Função fábrica = objetos
//Constructor = inicia-se com letra maiscula


// Constructor Function 
function Person(name, surname){
  const id = 3647 //const = atributos/metodos privados
  
//Person.name = name
  this.name = name // this = atributos/metodos públicos
  this.surname = surname

  this.method =()=>{
      console.log(this.name , ': I am a method! ')
  }
}

const p1 = new Person('Luiz', 'Otavio')
const p2 = new Person('Adriano ', 'Araujo')

p2.method()
p1.method()