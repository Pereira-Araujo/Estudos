#include <iostream>
#include <list> // incluir a lista
using namespace std;

int main()
{

    list<int> aula, teste;
    int tamanho;

    list<int>::iterator iterador;

    teste.push_front(89);

    tamanho = 10;
    for (int index = 0; index < tamanho; index++)
    {
        aula.push_front(index);
    }

    iterador = aula.begin();
    advance(iterador, 3);

    aula.erase(--iterador); // remove a posição iterator, no caso a 3

    aula.merge(teste); // o valor 89 da lista teste foi mergeado dentro da lista aula

    cout << "Tamanho da lista: " << aula.size() << "\n\n";

    tamanho = aula.size();
    for (int index = 0; index < tamanho; index++)
    {
        cout << aula.front() << "\n";
        aula.pop_front();
    }

    cout << "Tamanho da lista: " << aula.size() << "\n\n";

    return 0;
}