function LinkedList() {
  let head = null;
  let length = 0;

  const Node = (value) => {
    return {
      value,
      next: null,
    };
  };

  const add = (value) => {
    if (!head) {
      head = Node(value);
      length++;
      return head;
    }

    let node = head;
    while (node.next) {
      node = node.next;
    }
    node.next = Node(value);
    length++;
    return node.next;
  };

  return {
    length: () => length,
    add: (value) => add(value),
    print: () => console.log(head),
  };
}

const addNode = (qtd) => {
  const list = LinkedList();

  for (let i = 1; i <= qtd; i++) {
    list.add(i);
  }
  console.log(list.length());
  return list.print();
};

addNode(4);


