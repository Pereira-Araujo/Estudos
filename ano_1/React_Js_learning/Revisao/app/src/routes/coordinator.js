export const gotToLogin = (history)=>{
    history.push('/login')
}
export const gotToRegister = (history)=>{
    history.push('/cadastro')
}
export const gotToAddRecipes = (history)=>{
    history.push('/adicionar')
}
export const gotToListRecipes = (history)=>{
    history.push('/')
}

export const gotToDetails = (history)=>{
    history.push('/detalhe/:id')
}
