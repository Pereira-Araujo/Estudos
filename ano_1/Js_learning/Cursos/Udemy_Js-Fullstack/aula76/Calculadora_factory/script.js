const createCalculator = () => {
  return {
    display: document.querySelector(".calculator__display"),

    clearDisplay() {
      this.display.value = "";
    },

    calculate() {
      let operation = this.display.value;

      try {
        operation = eval(operation);

        if (!operation) {
          alert("Conta inválida");
          return;
        }

        this.display.value = operation;
      } catch (e) {
        alert("Conta inválida");
      }
    },

    calculateEnter(){
      this.display.addEventListener('keyup',event =>{
        if(event.keyCode === 13){
          this.calculate()
        }
      })
    },

    deleteEach() {
      this.display.value = this.display.value.slice(0, -1);
    },

    initial() {
      this.clickButtons();
    },

    clickButtons() {
      document.addEventListener("click", (event) => {
        let element = event.target;
        if (element.classList.contains("calculator__button--operation")) {
          this.buttonToDisplay(element.innerText);
        }
        if (element.classList.contains("clear")) {
          this.clearDisplay();
          console.log(element.classList.contains("clear"));
        }
        if (element.classList.contains("del")) {
          this.deleteEach();
        }
        if (element.classList.contains("equal")) {
          this.calculate();
        }
      });
    },

    buttonToDisplay(buttonValue) {
      this.display.value += buttonValue;
    },
  };
};
const calculator = createCalculator();
calculator.initial();
