const inputTask = document.querySelector('.card__create-task')
const add = document.querySelector('.card__button')
const list = document.querySelector('.card__list')



const createLi = ()=>{
  const element = document.createElement('li')
  return element
  
}

const createTask = (textInput)=>{
    const li = createLi()

    li.innerText = textInput
    list.appendChild(li)

}




add.addEventListener('click',function(){
    if(!inputTask.value) return

    createTask(inputTask.value)

}


)