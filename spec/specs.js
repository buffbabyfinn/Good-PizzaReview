describe('Pizza' , function() {
  it("will take the size and the toppings input from the user" , function() {
    var testPizza = new Pizza( "Beastly", "pepperoni", "onion", "tomato", "bacon", "mushroom" )
      expect(testPizza.pizzaSize).to.equal( "Beastly");
      expect(testPizza.toppings1).to.equal("pepperoni");
      expect(testPizza.toppings2).to.equal("onion");
      expect(testPizza.toppings3).to.equal("tomato");
      expect(testPizza.toppings4).to.equal("bacon");
      expect(testPizza.toppings5).to.equal("mushroom");
  });

  it("return the size and toppings you want on your pizza" , function() {
    var testPizza = new Pizza( "beastly", "pepperoni", "onion", "tomato", "bacon", "mushroom")
      expect(testPizza.pizzaOrder()).to.equal("You have ordered a beastly sized pizza with the following toppings: pepperoni, onion, tomato, bacon, mushroom.");
  });

  it("returns the price of the pizza depending on size chosen", function(){
    var testPizza = new Pizza("giant", "pepperoni", "onion", "tomato", "bacon", "mushroom")
      expect(testPizza.sizePrice()).to.equal(18);
  });

  it("calculates a price based on the number of toppings added.", function(){
    var testPizza = new Pizza("giant", "pepperoni", "NOTHING", "tomato", "NOTHING", "mushroom")
      expect(testPizza.toppingsPrice()).to.equal(24);
  });
  it("returns your total and order", function(){
    var testPizza = new Pizza("absurd", "bison", "herring", "garlic", "stilton", "NOTHING")
      expect(testPizza.pizzaTotalPrice()).to.equal("You have ordered a absurd sized pizza with the following toppings: bison, herring, garlic, stilton, NOTHING. Your total today is $32.00. Thanks and enjoy your Sloppy Goddamn Mess!")
  });
});
