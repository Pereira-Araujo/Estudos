// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia,
// e R$ 1,00 se forem compradas pelo menos 12.
// Faça um programa que leia o número de maçãs compradas,
// calcule e imprima o custo total da compra.

function valorMacas(total) {
  total >= 12 ? console.log(1.0 * total) : console.log(1.3 * total);
}

valorMacas(13);
