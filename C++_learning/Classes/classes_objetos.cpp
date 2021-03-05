#include <iostream>
#include <string>
using namespace std;

// Criando classes
class Gremlins
{
public:          //definindo o acesso
    int tamanho; // definindo as variaveis
    string comAgua;
    string semAgua;
};

int main()
{
    Gremlins fofos; //criando os objetos dentro das classes
    Gremlins badBoys;

    //Atribuindo valores ao objeto
    fofos.tamanho = 40;
    fofos.comAgua = "não";
    fofos.semAgua = "sim";

    //Retornando os valores
    cout << "Os gremilins fofos podem ser molhados? " << fofos.comAgua << "\n";
}