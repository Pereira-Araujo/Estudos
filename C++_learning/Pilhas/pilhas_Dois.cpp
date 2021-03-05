#include <iostream>
#include <stack>
using namespace std;

int main()
{

  stack<string> cartas;

  if (cartas.empty())
  { // empty retorna se a pilha está vazia ou não
    cout << "pilha vazia\n\n";
  }
  else
  {
    cout << "Pilha com cartas\n\n";
  } // como o push foi dado abaixo, a pilha se encontra vazia

  cartas.push("Rei de Copas");
  cartas.push("Rei de Espadas");
  cartas.push("Rei de Ouros");
  cartas.push("Rei de Paus");

  cout << "Tamanho da pilha: " << cartas.size() << "\n";
  cout << "A carta no topo da pilha é " << cartas.top() << "\n";

  cartas.pop();

  cout << "A nova carta no topo da pilha é " << cartas.top() << "\n";

  return 0;
}