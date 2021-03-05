#include <iostream>
#include <string>
#include <stdio.h>
#include <locale.h>
using namespace std;

int main()
{

    string food = "Pizza"; // Uma variável do tipo String
    string *ptr = &food;   // Aqui está o endereço da String 'food' armazenada em uma variável, isso é um Ponteiro

    cout << "Saída para String food é: " << food << "\n";

    cout << "Saída para o endereço da memória da String food: " << &food << "\n";

    cout << "Saída do Ponteiro: " << ptr << "\n";

    //Aqui quando o * não é usado na declaração, ele des-referencia o ponteiro e tem como saída o valor da variável.
    cout << *ptr << "\n";
    return 0;
}
