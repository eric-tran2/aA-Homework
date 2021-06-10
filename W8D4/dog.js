function Cat(){
  this.name = "Whiskers";
  this.age = 14;
}

function Dog(){
  this.name = "Boots";
  this.age = 11;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!!`)
}

const Whiskers = new Cat();
const Boots = new Dog();

Boots.chase.call(Boots, Whiskers)