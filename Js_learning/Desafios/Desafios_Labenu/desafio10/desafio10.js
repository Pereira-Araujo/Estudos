/*
Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
estar em condições, um dos seguintes requisitos deve ser satisfeito:

- Ter no mínimo 65 anos de idade.
- Ter trabalhado no mínimo 30 anos.
- Ter no mínimo 60 anos **e** ter trabalhado no mínimo 25 anos.

Com base nas informações acima, faça um programa que leia: o número do empregado (código), 
o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá imprimir a idade e o 
tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

*/

const aposentadoria = (codigo, nascimento, ingressoNaEmpresa) => {
  const anoAtual = new Date().getFullYear();
  let idade = anoAtual - nascimento;
  let tempoDeEmpresa = anoAtual - ingressoNaEmpresa;
  let status;

  if (nascimento > anoAtual || ingressoNaEmpresa > anoAtual) {
    return "ERROR";
  } else {
    if (
      idade >= 65 ||
      tempoDeEmpresa >= 30 ||
      (idade >= 60 && tempoDeEmpresa >= 25)
    ) {
      status = "Requerer Aposentadoria";
    } else {
      status = "Não Requerer Aposentadoria";
    }

    return `O usuário de posse código ${codigo}\n com a Idade de: ${idade} anos\n Com o tempo trabalhado de: ${tempoDeEmpresa} anos\n Status: ${status}`;
  }
};

let codigo = Number(prompt("Digite seu código"));
let nascimento = Number(prompt("Digite seu ano de nascimento"));
let anoIngresso = Number(
  prompt("Digite o ano de seu ingresso na nossa Empresa")
);

console.log(aposentadoria(codigo, nascimento, anoIngresso));
