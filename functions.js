// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
  console.log("hello there!");
}

printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function printGreeting2(name) {
  console.log(`hello there! ${name}`);
}

printGreeting2("...general kenobi");

// 3: Write a function that has 3 parameters: a string and two numbers.
// The String will be the name of a company, and the numbers will represent the minimum and
// maximum of a pay range for a posted job. The function should print out a sentence that includes
// the name of the company and the range itself
// (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function statePayrange(company, low, high) {
var range = high - low;
  console.log(`Here at ${company}, we have a huge salary disparity, with a range of $${range} between our lowest and highest salaries!`);
}

statePayrange("Widgets R Us", 30000, 200000);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(amount, item) {
  if (amount >= 4) {
    console.log(`${item} is stocked`);
  } else if (amount === 0) {
    console.log(`${item} - OUT OF STOCK`);
  } else {
    console.log(`${item} - RUNNING LOW!!`);
  }

}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
