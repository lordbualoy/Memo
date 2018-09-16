is called arrow function in javascript

// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.innerHTML = new_text;    
}
 
// Function to add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);