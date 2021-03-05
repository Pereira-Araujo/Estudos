#include <iostream>
using namespace std;
class MinhaClasse
{
public: // o objeto poderá ser acessado de qualquer ponto do código
    int x;

private: // privado à classe, por padrão a classe é privada.
    int y;
};

int main()
{
    MinhaClasse objeto;
    objeto.x = 25;

    MinhaClasse objetoPrivado; // A tentaiva de acessar um objeto privado retorna um erro
    objetoPrivado.y = 75;

    return 0;
}