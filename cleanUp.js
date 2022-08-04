// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
// I added a semicolon after the console.log(); so it would end that prhase,
// and same after the function call for the same reason


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// i added a semicolon after the var line to complete that line/var

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

// made sure the first word actually said "function" so it communications with java

//  EX 4:
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}`);
  }

  average(1000, 9);
  average(20,10);

// i added a semicolon after the console log, removed a period in the parentheses
// that wasn't supposed to be there then added the function call so it would do something
