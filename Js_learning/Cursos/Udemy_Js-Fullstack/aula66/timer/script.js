
const relogio = document.querySelector('.relogio')
const inicia = document.querySelector('.inicia')
const pausa = document.querySelector('.pausa')
const zera = document.querySelector('.zera')

let segundos = 0
let timer

const hora = (segundos) => {
  let data = new Date(segundos * 1000)

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT',
  })
}

const iniciaTimer = () => {
  timer = setInterval(() => {
    relogio.innerHTML = hora(segundos++)
  }, 1000)
}

inicia.addEventListener('click', function () {
  clearInterval(timer)
  iniciaTimer()
  relogio.classList.remove('cor-pausa')
})

pausa.addEventListener('click', function () {
  clearInterval(timer)
  relogio.classList.add('cor-pausa')
})

zera.addEventListener('click', function () {
  clearInterval(timer)
  relogio.innerHTML = '00:00:00'
  segundos = 0
  relogio.classList.remove('cor-pausa')
})
