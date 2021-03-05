#include <iostream>
using namespace std;

int main()
{

    int idade[5];
    int adulto[5];
    int positionVetor = 0;

    while (positionVetor < 5)
    {

        cout << "Digite a " << (positionVetor + 1) << " idade: \n";
        cin >> idade[positionVetor];

        adulto[positionVetor] = idade[positionVetor] >= 18;

        positionVetor++;
    }

    cout << "As idades do registradas no nosso sistema foram : ";

    for (positionVetor = 0; positionVetor < 5; positionVetor++)
    {
        cout << idade[positionVetor] << endl;
    }

    cout << "\n";
    cout << "\n";

    positionVetor = 0;

    while (positionVetor < 5)
    {

        if (adulto[positionVetor])
        {

            cout << "Se tens " << idade[positionVetor] << " és adulto " << endl;
        }
        else
        {
            cout << "Se tens " << idade[positionVetor] << " nao és adulto!  " << endl;
        }
        positionVetor++;
    }

    cout << "\n";
    cout << "\n";
}
