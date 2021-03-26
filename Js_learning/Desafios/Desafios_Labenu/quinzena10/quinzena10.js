// Faça um programa para ler 10 valores e imprimir quantos desses valores lidos são NEGATIVOS.
const numeros = [1, -2, 3, 4, -5, 6, 7, -8, 9, -10];

function contagem(array) {
  let negativos = [];

  for (let index = 0; index <= 10; index++) {
    if (array[index] < 0) {
      negativos.push(array[index]);
    }
  }
  console.log(
    `Existem ${negativos.length} números negativos\n São eles: ${negativos}`
  );
}

contagem(numeros);
