#include<iostream>;
using namespace std;

class Veiculo
{ // Classe PAI
public:
    string marca = "Ford";
    void buzina()
    {
        cout << "tu tuuuuuu \n";
    }
};

class Carro : public Veiculo
{ //Classe FILHO
public:
    string modelo = "mustang";
};

int main()
{
    Carro meuCarro;    // Aqui estou chamando a classe Carro que herdou os atributos da classe Veiculo
    meuCarro.buzina(); //a função buzina foi atribuida dentro do Veiculo e não no Carro, a classe Carro herdou essa função

    return 0;
}