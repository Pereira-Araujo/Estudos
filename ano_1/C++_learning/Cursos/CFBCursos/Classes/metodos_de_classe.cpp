#include <iostream>
#include <string>
using namespace std;

// Métodos são funções que pertencem à classe.

#include <iostream>
using namespace std;

// Métodos são funções que pertencem à classe.

class HelloG //1. Definição de classe interna:
{            // A função a ser executada é interna à classe
public:
    void helloGuys()
    {
        cout << "hello guys!!!";
    }
};

class HelloF // 2. Definição de classe externa ---------------------
{
public:
    void helloGirls(); //Declaração da função
};
//----
void HelloF::helloGirls() // Definição da função(externa à classe)
{
    cout << "Hello girls!!!";
}

int main()
{
    HelloG objHelloMen;   // Output da classe interna
    objHelloMen.helloGuys();

    cout << "\n";
    
    HelloF objHelloGirls;   // Output da classe externa
    objHelloGirls.helloGirls();

    return 0;
}
