function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

deepDishPizza = {
    "crustType" :"deep dish", 
    "sauceType" : "traditional", 
    "cheeses" : ["mozzarella"], 
    "toppings" : ["pepperoni"]
};

handTossedPizza = {
    "crustType" : "hand tossed",
    "sauceType" : "marinara",
    "cheeses" : ["mozzarella", "feta"],
    "toppings" : ["mushrooms","olives","onions"]
};
meatloversPizza = {
    "crustType" : "cheese-in-the",
    "sauceType" : "traditional",
    "cheeses" : ["mozzarella","gorgonzola","parmesan","feta"],
    "toppings" :["pepeeroni","sausage","bacon","canadian_bacon","black_olives"]
};
spinachPizza = {
    "crustType" : "hand-tossed",
    "sauceType" : "alfredo",
    "cheeses" : ["mozzarella","parmesan","ricotta"],
    "toppings" : ["spinach","mushrooms","sausage"]
};

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!