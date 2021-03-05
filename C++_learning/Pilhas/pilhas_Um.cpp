// Pilhas/stack são como vetores mas similares a tubos, onde o primeiro 
//elemento adcionado permanece ao fundo, sendo assim o elemento a ser retirado é o ultimo a ser adcionado.

#include <iostream>
#include <stack> // importar a biblioteca
using namespace std;

int main()
{
    //stack <tipo> nome
    stack<string> cartas;

    cartas.push("Rei de Copas"); // primeiro elemento logo ele está no "fundo" da stack
    cartas.push("Rei de Espadas");
    cartas.push("Rei de Ouros");
    cartas.push("Rei de Paus");
     // o último elemento está no topo da pilha

    cout << "Tamanho da pilha: " << cartas.size() << "\n"; // aqui vemos o tamanho da stack cartas

    cout << "A carta no topo da pilha é " << cartas.top() << "\n";

    cartas.pop(); // retirada do elemento do top, no caso o Rei de Paus

    cout << "A nova carta no topo da pilha é " << cartas.top() << "\n"; // a nova carta do topo passa a ser o Rei de Ouros

    return 0;
}