#include <iostream>
using namespace std;

// Criando classes herdades herdades por outras classes

class Animal
{ // Classe que será herdadas por diversas outras
public:
    void somAnimal()
    {
        cout << "Os animais fazem: \n";
    }
};

//Derivadas
class Porco : public Animal
{
public:
    void somAnimal()
    {
        cout << "O porco faz : we weeeee \n";
    }
};

class Cachorro : public Animal
{
public:
    void somAnimal()
    {
        cout << "O cão faz : au auuuu \n";
    }
};

int main()
{
    Animal somAnimal;
    Porco somPorco;
    Cachorro somCao;

    somAnimal.somAnimal(); // As funções são a mesma porque foram herdadas de uma única base
    somPorco.somAnimal();
    somCao.somAnimal();

    system("pause");
    return 0;
}