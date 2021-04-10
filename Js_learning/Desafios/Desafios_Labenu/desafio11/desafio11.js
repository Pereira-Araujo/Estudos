//Faça um programa para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

const decrescente = () => {
  const listaDeNumeros = [];
  let index = 1;
  let listaDecrescente;

  for (index; index <= 10; index++) {
    listaDeNumeros.push(index);
  }

  listaDecrescente = listaDeNumeros.reverse();

  listaDecrescente.map((item) => {
    console.log(item);
  });
};

decrescente();
