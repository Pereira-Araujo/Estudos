#include <iostream>
using namespace std;

void somar(int *variavel, int valor);
void ponteiro(char *valores);

//usando ponteiros com função

int main() {

int numero = 0;
char vetor[5];

somar(&numero,15);
ponteiro(vetor);// não há necessidade de tipar o endereço

cout<< numero <<'\n';

for(int i =0;i<8;i++){
  cout<<vetor[i]<<'\n';
}

return 0;
}

void somar(int *variavel, int valor){
  *variavel+=valor;

};

void ponteiro(char *valores){
valores[0]='P';
valores[1]='O';
valores[2]='N';
valores[3]='T';
valores[4]='E';
valores[5]='I';
valores[6]='R';
valores[7]='O';



};