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
    cout << "Para ver a fila ";
    string usuario;
    cout << "Digite um nome ";
    cin >> usuario;
    int idadeUsuario;
    cout << "Digite uma idade ";
    cin >> idadeUsuario;

    Pessoa *humanos = new Pessoa[5];
    Pessoa humano1, humano2, humano3, humano4, humano5;

    humanos[0] = humano1;
    humanos[1] = humano2;
    humanos[2] = humano3;
    humanos[3] = humano4;
    humanos[4] = humano5;

    humanos[0].insere("Ben", 20);
    humanos[1].insere("Zeca", 25);
    humanos[2].insere("Maria", 16);
    humanos[3].insere("Sol", 14);
    humanos[4].insere(usuario, idadeUsuario);

    for (int i = 0; i < 5; i++)
    {
        humanos[i].mostra();
    }

    return 0;
}