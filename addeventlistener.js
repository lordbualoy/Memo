event argument 
When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.
The event is always present, even when you don't provide a name:

$(".foo").on("click", function(){
  alert( arguments[0].type );
});

That is the same as saying this:

$(".foo").on("click", function(event){
  alert( event.type );
});

the name of event argument can be anything for example

$(".foo").on("click", function(myEvent){
  alert( myEvent.type );
});

parameterized addEventListener

// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.innerHTML = new_text;    
}
 
// Function to add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", function(){
	modifyText("four");
});

or

function callback(new_text) {
  return function modifyText() {
	  var t2 = document.getElementById("t2");
	  t2.innerHTML = new_text;    
	}
}

var el = document.getElementById("outside");
el.addEventListener("click", callback(new_text));



specifically designate this

var Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.onclick1 = function(event) {
    console.log(this.name); // undefined, as |this| is the element
  };
  this.onclick2 = function(event) {
    console.log(this.name); // 'Something Good', as |this| is bound to newly created object
  };
  element.addEventListener('click', this.onclick1);
  element.addEventListener('click', this.onclick2.bind(this)); // Trick
}
var s = new Something(document.body);

or use handleEvent method

var Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.handleEvent = function(event) {
    console.log(this.name); // 'Something Good', as this is bound to newly created object
    switch(event.type) {
      case 'click':
        // some code here...
        break;
      case 'dblclick':
        // some code here...
        break;
    }
  };

  // Note that the listeners in this case are |this|, not this.handleEvent
  element.addEventListener('click', this);
  element.addEventListener('dblclick', this);

  // You can properly remove the listeners
  element.removeEventListener('click', this);
  element.removeEventListener('dblclick', this);
}
var s = new Something(document.body);