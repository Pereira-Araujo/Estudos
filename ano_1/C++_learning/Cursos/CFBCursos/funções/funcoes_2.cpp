#include <iostream>
using namespace std;

void texto(); // prototipo das funções
void soma(int alpha, int beta);
int multiplicacao(int x, int y);
void lista(string vetor[4]);

int main()
{
  int resultado;

  string transporte[4] = {"carro", "avião", "ônibus", "patinete"};// array 

  lista(transporte); // função que ordena linha a linha o array
  resultado = multiplicacao(3, 3);

  texto();
  soma(15, 5);
  cout << resultado << "\n";

  return 0;
}

void texto()
{ // void não retorna nada
  cout << "C++ é massa demais\n";
}

void soma(int alpha, int beta)
{
  cout << "soma dos valores: " << alpha << " + " << beta << " é " << alpha + beta << endl;
}

int multiplicacao(int x, int y) // Com retorno
{
  return x * y;
}

void lista(string vetor[4])
{
  for (int index = 0; index < 4; index++)
  {
    cout << vetor[index] << "\n";
  }
}