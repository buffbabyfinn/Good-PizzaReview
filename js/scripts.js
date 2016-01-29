
var Pizza = function(pizzaSize, toppings1, toppings2, toppings3, toppings4, toppings5) {
// debugger;
  this.pizzaSize = pizzaSize;
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;
  this.toppings4 = toppings4;
  this.toppings5 = toppings5;
}

Pizza.prototype.pizzaOrder = function() {
  return "You have ordered a " + this.pizzaSize + " sized pizza with the following toppings: " + this.toppings1 + ", " + this.toppings2 + ", " + this.toppings3 + ", " + this.toppings4 + ", " + this.toppings5 + ".";
}

Pizza.prototype.sizePrice = function() {
// debugger;
  var setPrice = 18
    if (this.pizzaSize === "absurd") {
      return setPrice + 6;
    } else if (this.pizzaSize === "beastly") {
      return setPrice + 3;
    } else {
      return setPrice;
    }
}

Pizza.prototype.toppingsPrice = function() {
// debugger;
  var setTPrice = this.sizePrice();
    if (this.toppings1 === "NOTHING") {
      var setTPrice1 = setTPrice;
      } else {
      var setTPrice1 = setTPrice + 2;
      }
    if (this.toppings2 === "NOTHING") {
      var setTPrice2 = setTPrice1;
      } else {
      var setTPrice2 = setTPrice1 + 2;
      }
    if (this.toppings3 === "NOTHING") {
      var setTPrice3 = setTPrice2;
      } else {
      var setTPrice3 = setTPrice2 + 2;
      }
    if (this.toppings4 === "NOTHING") {
      var setTPrice4 = setTPrice3;
      } else {
      var setTPrice4 = setTPrice3 + 2;
      }
    if (this.toppings5 === "NOTHING") {
      var setTPrice5 = setTPrice4;
      } else {
      var setTPrice5 = setTPrice4 + 2;
      }
      var totalPrice = setTPrice5;
      return totalPrice;
}

Pizza.prototype.pizzaTotalPrice = function() {
  return this.pizzaOrder() + " Your total today is $" + this.toppingsPrice() + ".00. Thanks and enjoy your Sloppy Goddamn Mess!";
}


$(document).ready(function() {
  $("#buyPizza").click(function(event) {
  // debugger;
    event.preventDefault();

    var pSizeInput = $("select#sizePick").val();
    var top1Input = $("select#toppingsPick1").val();
    var top2Input = $("select#toppingsPick2").val();
    var top3Input = $("select#toppingsPick3").val();
    var top4Input = $("select#toppingsPick4").val();
    var top5Input = $("select#toppingsPick5").val();

    var newPizza = new Pizza(pSizeInput, top1Input, top2Input, top3Input, top4Input, top5Input);

    $("#pizzaOutput").empty();
    $("#priceOutput").empty();
    $("#pizzaOutput").append(newPizza.pizzaTotalPrice()).toLowerCase;

  });
});
