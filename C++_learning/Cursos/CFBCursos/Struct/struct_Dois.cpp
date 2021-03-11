#include <iostream>
using namespace std;

struct Pessoa
{
    string nome;
    int idade;

    void insere(string stNome, int stIdade)
    {
        nome = stNome;
        idade = stIdade;
    }

    void mostra()
    {

        cout << "Nome.... " << nome << "\n";
        cout << "Idade... " << idade << "\n";
        cout << "........."
             << "\n";
    }
};

int main()
{

    Pessoa pessoa1, pessoa2;

    pessoa1.insere("Adriano", 32);
    pessoa1.mostra();
    pessoa2.insere("Araujo", 25);
    pessoa2.mostra();

    return 0;
}