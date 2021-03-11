#include <iostream>
using namespace std;

struct Carro
{ // estrutura padrão acessivel para outras variáveis
   string nome, cor;
   int potencia, velocidadeMaxima;
};

int main()
{

   Carro carro1, carro2; //carro1 se torna uma especie de objeto
   carro1.nome = "Tornado";
   carro1.cor = "vermelho";
   carro1.potencia = 450;
   carro1.velocidadeMaxima = 350;

   carro2.nome = "Blue";
   carro2.cor = "azul";
   carro2.potencia = 250;
   carro2.velocidadeMaxima = 250;

   cout << "Nome do carro 1 é " << carro1.nome << endl;
   cout << "Nome do carro 2 é " << carro2.nome << endl;

   return 0;
}