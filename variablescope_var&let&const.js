        Scope          Hoisting CanBeReassigned CanBeRedeclared
var     Function scope Yes      Yes             Yes
let     Block scope    No       Yes             No
const   Block scope    No       No              No

//Scenario 1
var x = 2;	//1st x

function varTest() {
  var x = 1;	//2nd x
  console.log(x);  //will output 2nd x which is 1 because 2nd x is in different function scope to 1st x so 1st x and 2nd x are different variable
}
console.log(x);  //will output 1st x which is 2 because 1st x is in different function scope to 2nd x so 1st x and 2nd x are different variable

//Scenario 2
function varTest() {
  var x = 1;	//1st x
  if (true) {
    var x = 2;  //2nd x is actually 1st x in disguise! different block scope but same function scope
    console.log(x);  //will output 2
  }
  console.log(x);  //will also output 2 because 2nd x (which is actually 1st x) is in different block scope but still in the same function scope unlike Scenario 1
}

//Scenario 3
function letTest() {
  let x = 1;	//1st x
  if (true) {
    let x = 2;  //2nd x
    console.log(x);  // 2
  }
  console.log(x);  // 1
}


//At the top level of programs and functions, let, unlike var, does not create a property on the global object. For example:
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined