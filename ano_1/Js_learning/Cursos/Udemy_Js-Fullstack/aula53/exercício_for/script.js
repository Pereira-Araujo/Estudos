const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'footer', texto: 'Frase 3'},
    {tag:'section', texto: 'Frase 4'}
    ]
    
    const box = document.querySelector('.box')
    const div = document.createElement('div')
    
    
    for(let index=0;index<elementos.length;index++){
    
    const {tag, texto} = elementos[index] //desestruturação
    let valorTag = document.createElement(tag)
    valorTag.innerText = texto
    div.appendChild(valorTag)
    
    }
    
    box.appendChild(div)