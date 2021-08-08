function Calculator() {
  this.display = document.querySelector(".calculator__display");

  this.init = () => {
    this.click();
    this.enter();
  };


  this.enter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        this.realize();
      }
    });
  };


  this.click = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("calculator__button--number"))
        this.addNumberDisplay(element);
      if (element.classList.contains("clear")) this.clear(element);
      if (element.classList.contains("del")) this.del(element);
      if (element.classList.contains("equal")) this.realize(element);
    });
  };


  this.realize = () => {
    try {
      const operation = eval(this.display.value);

      if (!operation) {
        alert('Conta inválida');
        return;
      }

      this.display.value = operation;
    } catch (e) {
      alert('Conta inválida');
      return;
    }
  };

  this.addNumberDisplay = (element) => {
    this.display.value += element.innerText;
    this.display.focus();
  };
  this.clear = () => (this.display.value = "");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));

}

const calculator = new Calculator();
calculator.init();