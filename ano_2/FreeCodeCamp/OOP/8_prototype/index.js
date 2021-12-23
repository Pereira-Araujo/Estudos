function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4; // set numLegs in dog in 4

let beagle = new Dog("Snoopy");
