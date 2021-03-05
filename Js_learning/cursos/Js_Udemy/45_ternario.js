const pontosUsuario = 1000

// COM IF/ELSE
if(pontosUsuario>=1000){
    console.log('Usuário VIP')
}else{
    console.log('Usuário normal')
}

// OPERAÇÃO TERNÁRIA
const nivelusuario = pontosUsuario >=1000 ? 'Usuário VIP': 'Usuário normal'


// COM ||
// Como com a utilização do OU, um dos valores tem de ser necessariamente verdadeiro e um falso
const corUsuario = null
const padrao = corUsuario || "blue"
// reconhecendo no exemplo que o primeiro valor é vazio, ele retornará o segundo valor para a variável padrão
console.log(padrao)


