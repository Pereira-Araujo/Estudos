#include <iostream>
using namespace std;

int main()
{
  int *ponteiro;
  int vetor[10];

  for (int index = 0; index <= 10; index++)
  {

    ponteiro = &vetor[index];

    cout << '\n'
         << " O endereço do item " << index << " do vetor é " << ponteiro;
  }

  return 0;
}