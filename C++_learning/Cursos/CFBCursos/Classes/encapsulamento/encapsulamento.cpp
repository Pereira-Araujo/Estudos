#include <iostream>
using namespace std;

int senha;

class Funcionario
{

private:
    int salario; // o int salario é restrito à classe Funcionario

public:
    void definaSalario(int s)
    {
        salario = s; // o salario é atribuido ao parametro s
    }

    int mostreSalario()//é criada uma função que retorna o valor de salario, uma vez que ele é publico
    { 
        if (senha == 123) // Acessado por meio da senha
        {
            return salario;
        }
        else
        {
            return 404;
        }
    }
};

int main()
{
    Funcionario objetoSalario;
    objetoSalario.definaSalario(50000); // o valor é atribuido
    cout << "Digite sua senha ";
    cin >> senha;
    cout << "Seu salario é " << objetoSalario.mostreSalario(); // aqui mostrado
    return 0;
}
