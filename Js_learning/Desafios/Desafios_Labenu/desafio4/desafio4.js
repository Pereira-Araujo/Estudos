// Faça um programa que leia um valor e imprima a mensagem "É maior que 10" se o valor
// lido for maior que 10,
// caso contrário imprima "Não é maior que 10"

function maiorOuMenor(valor) {
  if (valor < 10) {
    console.log("Valor menor do que 10");
  } else if (valor > 10) {
    console.log("Valor maior do que 10");
  } else {
    console.log("Valor igual a 10");
  }
}
maiorOuMenor(5);
