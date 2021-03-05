#include <iostream>
using namespace std;

class Avo
{ // Classe base
public:
    void geracoes()
    {
        cout << "Eu atravessei gerações \n";
    }
};

class Pai : public Avo
{ // Classe que herda as informações
};

class Filho : public Pai
{ // Classe que herda as informações do Pai que herda da classe Avo
};

int main()
{
    Filho frase;
    frase.geracoes();

    return 0;
}