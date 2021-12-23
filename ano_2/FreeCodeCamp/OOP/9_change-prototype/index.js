function Dog(name) {
  this.name = name;
}

Dog.prototype = {
 constructor: Dog,  //  evite coletaral effects
  numLegs: 4,
  eat: () => {
    console.log("bones");
  },
  describe: () => {
    console.log("I'm a dog!");
  },
};

let doguinho = new Dog("baby");
console.log(doguinho);
