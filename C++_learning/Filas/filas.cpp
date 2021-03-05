#include <iostream>
#include <queue>
using namespace std;

/*
empty
size
front
back
push
pop
*/

int main()
{

    queue<string> cartas;

    cartas.push("Rei de Copas");
    cartas.push("Rei de Espadas");
    cartas.push("Rei de Ouros");
    cartas.push("Rei de Paus");

    cout << "Tamanho da fila: " << cartas.size() << "\n";
    cout << "primeira carta da fila: " << cartas.front() << "\n";
    cout << "A última carta da fila: " << cartas.back() << "\n";

    cout << "---------\n";

    while (!cartas.empty())
    {
        cout << "Depois de retirada a última carta : \n";
        cout << "primeira carta da fila é " << cartas.front() << "\n\n";

        cartas.pop();
    }

    return 0;
}