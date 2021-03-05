#include <iostream>
using namespace std;

//ENUM = enumeradores
int main()
{

    enum armas
    {
        fuzil,
        revolver,
        rifle,
        escopeta
    };
    enum doces
    {
        balas = 50,
        jujuba = 30,
        pirulito = 10
    }; // aqui há a atraibuição de valores para cada elemento.

    armas armaSelecionada;   // armaSelecionada será do tipo armas com os vaores possíveis contidos em armas
    armaSelecionada = fuzil; // atribuição da posição zero, onde se encontra o fuzil

    doces doceSelecionado;
    doceSelecionado = jujuba;

    cout << armaSelecionada << "\n"; // logo o cout retorna zero
    cout << doceSelecionado << "\n"; // retorna 30

    return 0;
}