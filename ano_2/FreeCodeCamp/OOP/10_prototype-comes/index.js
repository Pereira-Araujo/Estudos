function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy"); // beagle herda o prototype da função construtora que a criou

Dog.prototype.isPrototypeOf(beagle); // this method check the heritage
