#include <iostream>
#include <vector>
using namespace std;

int main()
{

    vector<int> numero; //vecto <tipo> nome(tamanho opcional)
    vector<int> numeroDois;
    int tamanho, index;

    numero.push_back(1); // adciona no final
    numero.push_back(2);
    numero.push_back(3);
    numero.push_back(4);
    numero.push_back(5);

    numeroDois.push_back(6);
    numeroDois.push_back(7);
    numeroDois.push_back(8);
    numeroDois.push_back(9);

    numero.insert(numero.begin(), 777); // inserir valores  no inicio, para outras posições: adicionar begin()+posição

    tamanho = numero.size(); // tamanho do vector
    // numero.swap(numeroDois); // Troca os valores entre vectores

    // pegando primeiro e ultimo valor
    cout << "Primeiro elemento do vector numero " << numero.front() << endl;
    cout << "Ultimo elemento do vector numero " << numero.back() << endl;

    // pegando algum valor
    cout << "O valor do meio do vector  " << numero.at(tamanho / 2) << endl;

    cout << "Tamanho do vetor é igual a " << tamanho << endl;

    for (index = 0; index < tamanho; index++)
    {
        cout << numero[index] << " ";
    }
    cout << endl;
    for (index = 0; index < numeroDois.size(); index++)
    {
        cout << numeroDois[index] << " ";
    }

    return 0;
}