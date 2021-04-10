/*
 Faça um programa para ler 3 valores (A, B e C), representando as medidas dos lados de um triângulo,
e imprimir se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser
menor que a soma dos outros 2 lados.

*/

const triangulo = (a, b, c) => {
  if (a > b + c) {
    return "não é um triangulo";
  } else if (b > a + c) {
    return "não é um triangulo";
  } else if (c > a + b) {
    return "não é um triangulo";
  } else {
    return "é um triângulo";
  }
};

let primeiro = Number(prompt("Digite o primeiro valor"));
let segundo = Number(prompt("Digite o segundo valor"));
let terceiro = Number(prompt("Digite o terceiro valor"));

console.log("Vamos ver se é um triângulo\n...\n...\n");

console.log(triangulo(primeiro, segundo, terceiro));
