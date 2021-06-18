function PizzaParlor() {
  this.pizze = {};
  this.toppings = toppings;
}

PizzaParlor.prototype.orderPizza = function(pizza) {
  this.pizze[pizza.toppings] = pizza;
  if  
}

function Toppings(cheese, pepperoni, mushrooms) {
  this.cheese = cheese;
  this.pepperoni = pepperoni;
  this.mushrooms = mushrooms;
}

function Size(small, medium, large) {
  this.small = small;
  this.medium = medium;
  this.large = large;
}
function Pizza(Toppings, Size) {
  this.Toppings = Toppings;
  this.Size = Size;  
}

Pizza.prototype.order = function() {
  return this.Toppings + " " + this.Size;
}

