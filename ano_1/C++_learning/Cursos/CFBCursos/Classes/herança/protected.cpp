#include <iostream>
using namespace std;

class Empregado
{
protected: //  <= Dados protegido
    int salario;
};

// Derivada ou filha
class Programador : public Empregado
{
public:
    int bonus;
    void definirSalario(int x)
    { // pegando a variavel de salario
        salario = x;
    }
    int pegueSalario()
    {
        return salario;
    }
};

int main()
{
    Programador funcionario;
    funcionario.definirSalario(3000);
    funcionario.bonus = 200;

    cout << "O salário é " << funcionario.pegueSalario() << "\n";
    cout << "O bonus é " << funcionario.bonus << "\n";

    system("pause");
    return 0;
}