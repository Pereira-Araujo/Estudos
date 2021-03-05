#include <iostream>
using namespace std;

int fatorando(int numero);
int fibonacci(int numero);

int main()
{

    int valor, resposta;
    valor = 4;

    resposta = fatorando(valor);

    cout << "Fatorial de " << valor << " é " << resposta;

    cout << "\n Fibonacci com " << valor << " é ";

    for (int index = 0; index < valor; index++)
    {
        cout << fibonacci(index + 1);
    }


    return 0;
}

int fatorando(int numero)
{
    if (numero == 0)
    {
        return 1;
    }
    return numero * fatorando(numero - 1);
}

int fibonacci(int numero)
{
    if (numero == 1 || numero == 2)
    {
        return 1;
    }
    else
    {
        return fibonacci(numero - 1) + fibonacci(numero - 2);
    }
}