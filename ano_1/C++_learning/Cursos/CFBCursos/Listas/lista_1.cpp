#include <iostream>
#include <list> // incluir a lista
using namespace std;

//Notas :
// list<int> paginas(50) / uma lista chamada paginas com 50 posições
// list<int> frascos(10, 50) /  uma lista chamada frascos com 10 posições com valores 50 cada

int main()
{

    list<int> aula; // atribuição de uma lista chamada aula
    int tamanho;

    list<int>::iterator iterador; // iterator

    tamanho = 10;
    for (int index = 0; index < tamanho; index++)
    {
        aula.push_front(index); // push_front = insereno inicio da lista e push_back insere pelo final
    }

    iterador = aula.begin();   // inserindo elementos dentro das listas
    advance(iterador, 5);      //posição
    aula.insert(iterador, 51); // valor da posição

    cout << "Tamanho da lista: " << aula.size() << "\n\n";

    tamanho = aula.size();
    for (int index = 0; index < tamanho; index++)
    {
        cout << aula.front() << "\n";
        aula.pop_front();
    }
    return 0;
}