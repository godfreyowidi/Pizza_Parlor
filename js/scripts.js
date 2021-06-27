// Business logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.costBasedOnSize = function() {
  if (this.size === "Small") {
    return 7;
  } else if (this.size === "Medium") {
    return 10;
  } else if (this.size === "Large") {
    return 15;
  } else {
    return ("Did you choose the size of your pizza?")    
  }
}

Pizza.prototype.costBasedOnTopping = function() {
  if (this.toppings.length != 0) {
    let toppingCost = this.toppings.length * 4;
    return toppingCost;
  } else {
    return ("Did you choose a topping for your pizza?")
  }
}

Pizza.prototype.tabulate = function(tCost, sCost) {
  let totalCost = tCost + sCost;
  return totalCost;
  //$("#showTotalCost").html(totalCost)
}

//UI
let pizza;
$(document).ready(function() {
  $("#formField").submit(function(event) {
    event.preventDefault();
    
    $("#invoice").show();
    let inputtedName = $("#name").val();
    let inputtednumToppings = parseInt($("#numToppings :selected").val());

    let toppingTray = []; //gets the value of checked toppings
    $("input:checkbox[name=checkTopping]:checked").each(function() {
      let inputtedTopping = ($(this).val());
      toppingTray.push(inputtedTopping);
      //toppingTray[i] *= inputtednumToppings;
    });
    $("#displayToppings").text(toppingTray + ",");
    
    let inputtedCheckedSize =$("input:radio[name=sizePizza]:checked").val();
    $("#displayName").text(inputtedName);
    $("#displaySize").text(inputtedCheckedSize);

    pizza = new Pizza(toppingTray, inputtedCheckedSize);
    let costBasedOnToppings = pizza.costBasedOnTopping();
    let costBasedOnSizes = pizza.costBasedOnSize(inputtedCheckedSize);
    let tabulateTotalCost = pizza.tabulate(costBasedOnToppings, costBasedOnSizes);
    //let tabulate = (costBasedOnToppings, costBasedOnSizes);
    $("#showTotalCost").html(tabulateTotalCost)
  });
});


