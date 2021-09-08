// PILHA

const add = (arr, value) => arr.push(value);

const remove = (arr) =>  arr.pop();


const showAsPill = (arr) => {
  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const createPill = (qtd) => {
  let all = qtd;
  let arr = [];

  for (let i = 0; i <= all; i++) {
    add(arr, i);
  }

  return arr;
};

const removeElements = (arr, qtd) => {
  let all = qtd;

  for (let i = 0; i < all; i++) {
    remove(arr, i);
  }

  return arr;
};

const showRemoved = (arr, qtd) =>  arr.slice(-qtd);


/**********/

console.log("*PILHA*\n");
console.log(
  'Pilha é aplicação do conceito LIFO, um acrônimo para a expressão inglesa "Last In, First Out" que, em português significa último a entrar, primeiro a sair\n'
);

console.log("Abaixo a pilha: ");
showAsPill(createPill(8));

console.log("\nE aqui está a pilha com 4 elementos retirados");
showAsPill(removeElements(createPill(8), 4));
console.log("\nE abaixo os elementor removidos");
showAsPill(showRemoved(createPill(8), 4));
