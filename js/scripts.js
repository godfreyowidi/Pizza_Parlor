function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costBasedOnSize = function() {
  if (this.size === "small") {
    return 4;
  } else if (this.size === "medium") {
    return 5;
  } else if (this.size === "large") {
    return 6;
  } else {
    
  }
}

Pizza.prototype.costbasedOnTopping = function() {
  if (this.toppings.length != 0) {
    let toppingCost = this.toppings.length * 4;
    return toppingCost;
  } else {

  }
}

Pizza.prototype.tabulate = function(tCost, sCost) {
  let totalCost = tCost + sCost;
  $("displayTotalCost").html(totalCost)
}


