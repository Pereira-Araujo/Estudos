// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, 
// calcular e escrever o valor correspondente em graus Celsius 
// (baseado na fórmula abaixo): (0 °C × 9/5) + 32 = 32 °F


const conversion = (CelciusValue) => {
    const FahrenheitValue = (Number(CelciusValue) * (9/5) + 32)
    return FahrenheitValue 
}