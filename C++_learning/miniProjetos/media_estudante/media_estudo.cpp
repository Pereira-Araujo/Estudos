#include <iostream>
using namespace std;

int main(){
   
   int study_hour,
   women,
   men,
   people,
   studyMan;

   string sexo;

  

   int i = 0;

   cout << "Quantidade de estudantes ";
   cin >> people;

   while( i < people){

       cout << "Quantas horas estudas?  Estudante numero" << (++i)  << " " ;// A variavel i é para controlar a quantidade de aluno
    cin>>study_hour;

       cout << "Qual seu sexo? M-masculino/ F-feminino  Estudante numero " << (i) << " ";
       cin >> sexo;

       cout << "Next \n";

       cin.ignore();
       getline(cin, sexo);

      
    

   }

 

   
cout<< "A quantidade de mulheres " << women;
cout << "A quantidade de homens " << men;


}