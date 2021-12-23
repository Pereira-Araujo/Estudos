const date = new Date()

let numberDays = date.getUTCDay()
let day = date.getUTCDate()
let month = date.getUTCMonth()
let year = date.getUTCFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

let dayWeek

switch (numberDays){
  case 0:
  dayWeek = 'Domingo'
  break
  case 1:
  dayWeek = 'Segunda'
  break
  case 2:
  dayWeek = 'Terça'
  break
  case 3:
  dayWeek  = 'Quarta'
  break
  case 4:
  dayWeek = 'Quinta'
  break
  case 5:
  dayWeek = 'Sexta'
  break
  case 6:
  dayWeek = 'Sábado'
  break
  }

let textDate = document.querySelector('.section__date')
let textTime = document.querySelector('.section__time')

textDate.innerHTML = `Hoje é ${dayWeek}, dia ${day} do mês ${month} de ${year}, ${hour}:${minutes}`


