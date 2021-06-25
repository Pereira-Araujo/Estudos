const createCalculator = () => {
    return{
      display:document.querySelector('.calculator__display'),
  
      initial(){
        this.clickButtons()
      },
  
      clickButtons(){
        document.addEventListener('click',((event)=>{
          const element = event.target
          if(element.classList.contains('calculator__button')){
            this.buttonToDisplay(element.innerText)
          }
        }).bind(this))
      },
  
      buttonToDisplay(text){
         this.display.value += text
      }
    }
  }
  const calculator = createCalculator()
  calculator.initial()