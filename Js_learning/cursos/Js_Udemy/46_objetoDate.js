
//Exemplo/Exercicio de objeto Date

const zeroEsquerda = (numero) => {
    return numero >= 10 ? numero : `0${numero}`
}

const formatarDataBrasil = (data) => {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())

    return `A data hoje em formato brasileiro é:\n${dia}/${mes}/${ano}`
}

const novaData = new Date()

formatarDataBrasil(novaData)