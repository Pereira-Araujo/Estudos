
const inputTask = document.querySelector('.card__create-task')
const add = document.querySelector('.card__button')
const list = document.querySelector('.card__list')


const createLi = ()=>{
  const element = document.createElement('li')
  return element
  
}

const clearInput = () =>{
    inputTask.value = ''
    inputTask.focus()
}

const createTask = (textInput)=>{
    const li = createLi()

    li.innerText = textInput
    list.appendChild(li)
    clearInput()

}

add.addEventListener('click',()=>{
    if(!inputTask.value) return
    createTask(inputTask.value)
})

inputTask.addEventListener('keypress',(event)=>{
    if(!inputTask.value) return
    if(event.keyCode===13){
    createTask(inputTask.value)}
})

