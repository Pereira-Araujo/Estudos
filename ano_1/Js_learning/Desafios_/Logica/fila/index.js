// FILA - QUEUE
const createQueue = (qtd) => {
  let arr = [];
  for (let i = 0; i <= qtd; i++) {
    arr.push(i);
  }
  return arr;
};

const dequeue = (arr) => {
  // primeiro que entrou sai
  return arr.shift();
};

const priority = (arr, el) => {
  // add ao primeiro lugar
  return arr.unshift(el);
};

const peek = (arr) => {
  //Exibe o primeiro da fila
  return arr[0];
};

const showQueue = (arr) => {
  //exibe o array
  return arr;
};

/*********************/
const example = createQueue(4);

console.log("*FILA*");
console.log(
  "Filas são coletâneas de dados que mantém os objetos em uma ordem determinada ao aplicar o algoritmo FIFO (First In First Out), ou seja, o primeiro a entrar é o primeiro a sair.\n"
);
console.log("Exibição da fila:\n");
console.log(showQueue(example));

console.log("\nA fila anda 1 casa:");
dequeue(example);
console.log(showQueue(example));
console.log("\nA fila anda mais duas:");
dequeue(example);
dequeue(example);
console.log(showQueue(example));
console.log("\nExibe o primeiro lugar da fila:");
console.log(showQueue(peek(example)));
console.log("\nAlguém fura a fila:");
priority(example, "Furão");
console.log(showQueue(example));
