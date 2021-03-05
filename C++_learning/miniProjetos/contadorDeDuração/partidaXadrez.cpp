// Faça um programa para ler a hora de início e a hora de fim de um jogo de Xadrez e calcular a duração do jogo em horas. Considere:

// - Apenas horas inteiras, sem os minutos.
// - O tempo máximo de duração do jogo é de 24 horas e o jogo pode iniciar em um dia e terminar no dia seguinte

#include <iostream>
using namespace std;

class MinhaClasse
{
public:
    void entrada(int inicio, int fim)
    {
        cout << "Digite a hor do inicio da partida\n";
        cin >> inicio;

        cout << "Digite a hora do fim da partida\n";
        cin >> fim;

        if (fim < inicio)
        {
            cout << fim - inicio + 24 << " Horas\n";
        }
        else
        {
            cout << fim - inicio << " Horas\n";
        }
    }
};

int main()
{
    int inicio;
    int fim;
    MinhaClasse objetos;
    objetos.entrada(inicio, fim);
   
    system("pause");
    
    return 0;
}
