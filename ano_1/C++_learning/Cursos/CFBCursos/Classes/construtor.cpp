#include <iostream>;
#include <string>;
using namespace std;

class MinhaClasse
{
public:           // O construtor sempre é 'public'
    MinhaClasse() // O construtor deve ter o mesmo nome da classe.
    {
        cout << "Hey guys! \n";
    }
};

class Car // Construtor com parametros
{
public:
    string marca;
    string modelo;
    int ano;

    Car(string x, string y, int z) // Aqui os parametros recebem os valores atribuidos à marca, modelo e ano.
    {
        marca = x;
        modelo = y;
        ano = z;
    }
};

int main()
{
    MinhaClasse objeto; // chamando ele e atribuindo a um nome, ele será automaticamente executado.

    Car carro1("BMW","X5",1999); // Aqui os 'carros' recebem seus valores/argumentos
    Car carro2("Ford","Mustang", 1969);

    cout << "O modelo do carro é "<< carro1.modelo << endl;

    return 0;
}