// Business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costBasedOnSize = function() {
  if (this.size === "small") {
    return 7;
  } else if (this.size === "medium") {
    return 10;
  } else if (this.size === "large") {
    return 15;
  } else {
    
  }
}

Pizza.prototype.costBasedOnTopping = function() {
  if (this.toppings.length != 0) {
    let toppingCost = this.toppings.length * 4;
    return toppingCost;
  } else {

  }
}

Pizza.prototype.tabulate = function(tCost, sCost) {
  let totalCost = tCost + sCost;
  $("#showTotalCost").html(totalCost)
}

//UI
let pizza;
$(document).ready(function() {
  $("#formField").submit(function(event) {
    event.preventDefault();
    $("#invoice").show();
    let inputtedName = $("#name").val();
    let inputtednumToppings = parseInt($("#numToppings").val());
    let toppingTray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function() {
      let inputtedToppings = $(this).val();
      toppingTray.push(inputtedToppings);
      $("#displayToppings").text(inputtedToppings + ",");
    });
    let inputtedCheckedSize =$("input:radio[name=sizePizza]:checked").val();
    $("#displayName").text(inputtedName);
    $("#displaySize").text(inputtedCheckedSize);

    pizza = new Pizza(toppingTray, inputtedCheckedSize);
    let costBasedOnToppings = pizza.costBasedOnTopping();
    let costBasedOnSizes = pizza.costBasedOnSize();
    pizza.tabulate(costBasedOnToppings, costBasedOnSizes);
  });
});


