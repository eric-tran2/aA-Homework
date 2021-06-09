function titleize(names, callback) { // names = array of names 
  new_arr = names.map(name => { return callback(name)});
  console.log(new_arr);
  new_arr.forEach(el => {console.log(el)});
};

function printCallback(name){
  name = `Mx. ${name} Jingleheimer Schmidt`;
  return name;
};

titleize(["Mary", "Brian", "Leo"], printCallback)


// tricks is in an ARRAY  // referencing steph curry nba example

function Elephant(name, height, tricks) {
  this.name = name
  this.height = height
  this.tricks = tricks
}


Elephant.prototype.trumpet = function () {
  console.log(`${this.name} goes phrRRRRRRRRRRR!!!!!!!`)
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elehpant.prototype.addTrick(trick) = function () {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.prototype.paradeHelper = function (elephant) {
  console.log(elephant.name + "is trotting by!")
};


// ES2015 Class


// class Elephant {
//   constructor(name, height, tricks) {
//     this.name = name;
//     this.height = height;
//     this.tricks = tricks;
//   }
//   trumpet() {
//     console.log(`${this.name} goes phrRRRRRRRRRRR!!!!!!!`);
//   }
//   grow() {
//     this.height += 12;
//   }
// }



// Elehpant.prototype.addTrick(trick) = function(){
//   this.tricks.push(trick);
// };

function dinerBreakfast() {
  let order = "I would like cheesy scrambled eggs"
  return function (arg) {
    order += " and " + arg
    console.log(order + " please.")
  };
};

// orders("ham")
// orders("bacon")
// dinerBreakfast()

// function dinerBreakfast() {
//   let order = "I'd like cheesy scrambled eggs please.";
//   console.log(order);

//   return function (food) {
//     order = `${order.slice(0, order.length - 8)} and ${food} please.`;
//     console.log(order);
//   };
// };
let bfast = dinerBreakfast
bfast("food")
bfast("drink")
dinerBreakfast()

