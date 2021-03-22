#include <iostream>
#include <string>


using namespace std;

int main() {
  string comida = "Pizza";  // Uma variável do tipo String
  string *ponteiroComida;  // Aqui está a declaração da variável ponteiro
  ponteiroComida = &comida; // Aqui a atribuição da variavel ao endereço da variável comida

  cout << "Saída para String 'comida' é: "<< comida << "\n";
  cout <<"Saída para o endereço da memória da String 'comida': "<< &comida << "\n";
  cout << "Saída do Ponteiro: "<< ponteiroComida << "\n";

  
  cout << "A sintaxe '*ponteiro', irá devolver o valor guardado no ponteiro "<< *ponteiroComida <<"\n";
  
  return 0;
}

