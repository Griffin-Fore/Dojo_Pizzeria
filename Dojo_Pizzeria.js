
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
    "toppings" :["pepperoni","sausage","bacon","canadian_bacon","black_olives"]
};
spinachPizza = {
    "crustType" : "hand-tossed",
    "sauceType" : "alfredo",
    "cheeses" : ["mozzarella","parmesan","ricotta"],
    "toppings" : ["spinach","mushrooms","sausage"]
};

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

// create arrays that hold options
var pizzaCrusts = ["traditional","deep-dish","hand-tossed"];
var pizzaSauces = ["traditional","marinara","alfredo"];
var pizzaCheeses = ["mozzarella","gorgonzola","feta","parmesan"];
var pizzaToppings = ["pepperoni","sausage","bacon","canadian-bacon","black-olives","spinach"];
// Math.round(Math.random() * toppings.length)

function randomInt(num){
    // floor sets the random values to whole numbers
    var randomInt = Math.floor(Math.random() * num);

    return randomInt;
}

randomInt()

var pizzaCrust = pizzaCrusts[randomInt(pizzaCrusts.length-1)];
var pizzaSauce = pizzaSauces[randomInt(pizzaSauces.length-1)];
var pizzaCheese = pizzaCheeses[randomInt(pizzaCheeses.length-1)];
var pizzaTopping = pizzaToppings[randomInt(pizzaToppings.length-1)];


function randomPizza(){
    var randomPizza = {
        "crustType" : pizzaCrust,
        "sauceType" : pizzaSauce,
        "cheeseType" : pizzaCheese,
        "pizzaTopping" : pizzaTopping
    }
    return randomPizza;
}

console.log(randomPizza());