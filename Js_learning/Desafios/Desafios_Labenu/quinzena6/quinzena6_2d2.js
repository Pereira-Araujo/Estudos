// Quinzena 6 - 2/2
// Faça um programa para ler dois valores e imprimí-los em ordem crescente. Considere que não serão lidos valores iguais.

function crescente(x, y) {
  x == y
    ? console.log("por favor insira números diferentes")
    : x > y
    ? console.log(y, x)
    : console.log(x, y);
}

let alpha = parseInt(prompt("Digite dois valores diferentes "));
let betha = parseInt(prompt("=>"));

crescente(alpha, betha);
