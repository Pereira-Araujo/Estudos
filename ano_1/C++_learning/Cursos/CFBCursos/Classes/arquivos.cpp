#include <iostream>
#include <fstream>
#include <string> // biblioteca com três classes inclusas, para criar, ler e escrever arquivos
using namespace std;

// ofstream = criar e escrever arquivos
// ifstream = ler os arquivos
// fstream = combinação dos dois anteriores

int main()
{
    string nomeArquivo;
    cout << "Escreva o nome do arquivo \n";
    cin >> nomeArquivo;

    //Criando e abrindo o arquivo:
    ofstream meuArquivo(nomeArquivo);

    //
    string entradaUsuario;
    cout << "Escreva uma frase no arquivo \n";
    cin >> entradaUsuario;

    // Escrever no arquivo:
    meuArquivo << entradaUsuario;

    /////////////////////////////////////////

    // string para ler o texto
    string meuTexto;

    // apontar para o arquivo
    ifstream leia("texto.txt");

    while (getline(leia, meuTexto))
    {
        // Output the text from the file
        cout << meuTexto;
    }

    // Fechar o arquivo(considerado uma boa pratica)

    system("pause");
    return 0;
}