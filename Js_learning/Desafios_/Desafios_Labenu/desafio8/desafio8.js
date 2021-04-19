// Faça um programa para ler a hora de início e a hora de fim de um jogo de Xadrez e calcular a duração do jogo em horas. Considere:
// - Apenas horas inteiras, sem os minutos.
// - O tempo máximo de duração do jogo é de 24 horas e o jogo pode iniciar em um dia e terminar no dia seguinte

function duracaoXadrez(comeco, fim) {
  const inicioPartida = parseInt(comeco.value),
        fimPartida = parseInt(fim.value);

  if (fimPartida < inicioPartida) {
    document.getElementById("demo").innerHTML =
      fimPartida - inicioPartida + 24 + " Horas";
  } else {
    document.getElementById("demo").innerHTML =
      fimPartida - inicioPartida + " Horas";
  }
}
