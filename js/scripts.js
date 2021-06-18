// Business logic
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
  $("showTotalCost").html(totalCost)
}

//UI
let pizza;
$(document).ready(function() {
  $("#formField").submit(function(event) {
    event.preventDefault();
    $("invoice").show();
    let inputtedName = $("#name").val();
    let inputtedToppings = parseInt($("toppings").val());
    let toppingTray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function() {
      let inputtedToppings = $(this).val();
      toppingTray.push(inputtedToppings);
      $("displayToppings").text(inputtedToppings + ",");
    });
    let pizza = new Pizza(toppingTray, inputtedSize);
    let costbasedOnToppings = pizza.costbasedOnTopping();
    let costBasedOnSizes = pizza.costBasedOnSize();
    pizza.tabulate(costbasedOnToppings, costBasedOnSizes);
  });
});


