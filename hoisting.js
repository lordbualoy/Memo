//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//Scenario 1
console.log(hoist); // Output: ReferenceError: hoist is not defined

//Scenario 2
console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';

//the reason why Scenario 2 doesn't have the same 'ReferenceError: hoist is not defined' message is because
//JavaScript has hoisted the variable declaration. This is what the code above looks like to the interpreter:
var hoist;

console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';

//Scenario 3
function hoist() {
  console.log(message); // Output: undefined
  var message='Hoisting is all the rage!'
}

hoist();

//This is what the code above looks like to the interpreter:
function hoist() {
  var message;
  console.log(message); // Output: undefined
  message='Hoisting is all the rage!'
}

hoist();

//Scenario 4 Function
//function that were declared as function hoisted() {}; will be hoisted
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

//Scenario 5 Function
//function that were declared as var a = function() {}; will not be hoisted
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};