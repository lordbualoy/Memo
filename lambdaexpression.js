//is called arrow function in javascript

// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.innerHTML = new_text;    
}
 
// Function to add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);

//arrow function has different way in which the this scope works
//example 1
var el = document.getElementById("outside");
el.newProperty = 10;
el.addEventListener("click", () => {
	this.newProperty++;				//el.newProperty won't become 11
	console.log(el.newProperty);	//will print 10 to the console
	console.log(this);				//will print 'Window' object instead of el; as arrow function is declared in Window scope
});

//example 2
var el = document.getElementById("outside");
el.newProperty = 10;
el.addEventListener("click", function(){
	(
		() => {
			this.newProperty++;				//el.newProperty will become 11
			console.log(el.newProperty);	//will print 11 to the console
			console.log(this);				//will print 'el' object
		}
	)();	//Self invoking arrow function
});

//example 3
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;					//cat.lives won't become 8
	console.log(cat.lives);			//will print 9 to the console
	console.log(this);				//will print 'Window' object instead of el; as arrow function is declared in Window scope
  }
}

//example 4
var cat = {
  lives: 9,
  jumps: function() {
	(
		() => {
			this.lives--;					//cat.lives will become 8
			console.log(cat.lives);			//will print 8 to the console
			console.log(this);				//will print 'cat' object
		}
	)();	//Self invoking arrow function
  };
}

//in conclusion the arrow function scope will change on function scope