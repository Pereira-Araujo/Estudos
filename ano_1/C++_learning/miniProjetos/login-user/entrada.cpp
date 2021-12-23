#include <iostream>
#include <string>
#include <conio.h>

using namespace std;


string user;     // DEFINING A USER INPUT
string userName; // DEFINING A LOGIN WITH A USER

string nav[2] = {"valor1", "valor2"}; // OPTIONS
int opcao;
///////////////////////////////////////////////////////////////////////
void cadastro()
{ //this a function

  cout << "Por favor digite seu nome para cadastro aqui ";
  cin >> user;
}
/////////////////////////////////////////////////////////////////////////
void name()
{ //this is a function

  cout << "Login : ";

  cin >> userName;

  if (userName == user)
  {
    cout << "Hello " << userName << "! Choice the options, input with the number option : \n\n"; // outputs a message ok
    cout << nav[0] << " "
         << "\n\n"
         << nav[1] << " "
         << "\n\n";

  }
  else
  {

    cout << "Wrong! Try again \n" // cadastred name wrong
         << endl;
    return name();
  }
}
///////////////////////////////////////////////////////////////////////
void options()
{
    cin >> opcao;

  if (opcao == 1)
  {
    cout << "Digitou o valor 1";
  }
  else if (opcao == 2)
  {
    cout << "Digitou o valor 2";
  }else{
    cout << "Erro! por favor escolhar um valor válido ";
    return name();
    
 
  }


  
}

int main()
{
  cadastro();
  name();
  options();

  
}
