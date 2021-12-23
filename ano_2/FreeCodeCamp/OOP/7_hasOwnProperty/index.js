function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let props in canary) {
  if (canary.hasOwnProperty(props)) {
    // prototype inherits
    ownProps.push(props);
  }
}
