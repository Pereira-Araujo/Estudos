
const container = document.querySelector('article')
const paragrafos = container.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)//pegando elemento do body
const corBackground = estiloBody.backgroundColor// pegando estilo


for(let p of paragrafos){
  p.style.color = corBackground
}

