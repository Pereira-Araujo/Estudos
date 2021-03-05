// Quinzena 6 - 1/2
// Faça um programa para ler o ano atual e o ano de nascimento de uma pessoa. Imprimir uma mensagem que diga se ela poderá ou não votar este ano.

console.log("Bem vindo à nossa plataforma");

let votarOuNao = (nascimentoUsuario) => {
  const anoAtual = new Date().getUTCFullYear();

  let idade = anoAtual - nascimentoUsuario;

  idade >= 18 ? console.log("vc pode votar") : console.log("vc não pode :(");
};

let usuario = prompt("Digite seu ano de nascimento");
votarOuNao(usuario);
