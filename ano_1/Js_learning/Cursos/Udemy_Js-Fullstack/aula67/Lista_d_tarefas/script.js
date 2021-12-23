
const inputTask = document.querySelector('.card__create-task')
const add = document.querySelector('.card__button')
const list = document.querySelector('.card__list')

// Cria Li
const createLi = ()=>{  
  const element = document.createElement('li')
  return element
}

// Cria Botão de Apagar
const createClearButton=(li)=>{
    li.innerText += ' '
    const clearButton = document.createElement('img')
    clearButton.setAttribute("class",'button__clear')
    clearButton.setAttribute( "src", "./assets/trash_icons.svg")
    li.appendChild(clearButton)
}

// Limpa o campo de Input
const clearInput = () =>{
    inputTask.value = ''
    inputTask.focus()
}

// Cria Tarefa
const createTask = (textInput)=>{
    const li = createLi()

    li.innerText = textInput
    list.appendChild(li)
    clearInput()
    createClearButton(li)
    saveTaks()
}

// Chama a função CreateTask com click
add.addEventListener('click',()=>{
    if(!inputTask.value) return
    createTask(inputTask.value)    
})

// Chama a função CreateTask com Enter
inputTask.addEventListener('keypress',(event)=>{
    if(!inputTask.value) return
    if(event.keyCode===13){
    createTask(inputTask.value)}
    
})

// Remove Tarefa
document.addEventListener('click', function(e){
const element = e.target // elemento clicado

if(element.classList.contains('button__clear')){
    element.parentElement.remove()
    saveTaks()
}
})

// Salva tarefa no localStorage
const saveTaks=()=>{
    let liTasks = list.querySelectorAll('li')
    const taskList =[]
    
    for (let task of liTasks){
       let taskText = task.innerText.trim()
       taskList.push(taskText)
    }

    const taskJSON = JSON.stringify(taskList)
    localStorage.setItem('task', taskJSON)
}

// Retorna as tarefas salvas no localStorage
const getTasks=()=>{
    const tasks = localStorage.getItem('task')
    const taskList = JSON.parse(tasks)

   for(let task of taskList){
    createTask(task)
}}

getTasks() 