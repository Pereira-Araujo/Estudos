//- Se uma palavra começar com uma consoante, tire a primeira consoante ou grupo
//     de consoantes, mova-a para o final da palavra e adicione AY a ela.

//- Se uma palavra começar com uma vogal, basta adicionar WAY no final.

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way"; //se a primeira letra começa com vogal

  const consonantCluster = str.match(/^[^aeiou]+/)[0]; // se a primeira letra não é vogal ela é 4
  // adicionada na posição zero do array
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
  //recortar a parte de consoante + adiciona ela ao final + 'ay'
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));

//response:
//onsonantcay
//aliforniacay
//algorithmway
