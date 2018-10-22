let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});


//alternate
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 250);
});

myFirstPromise.then(() => {
  console.log("Yay!");
});

//resolve vs reject
function promiseFunc(flag){
	console.log(flag)
	return new Promise((resolve, reject) => {
	  if (flag)
		  resolve();
	  else
		  reject();
	});
};
promiseFunc(true)					//true
.then(()=>promiseFunc(true))		//true
.then(()=>promiseFunc(false))		//false
.catch(()=>console.log("error"));	//error

promiseFunc(false)					//false
.then(()=>promiseFunc(true))		//skipped
.then(()=>promiseFunc(true))		//skipped
.catch(()=>console.log("error"));	//error

//await Promise
//to use await keyword in the function the function itself is required to have async modifier assigned first
async function main(){
	function timeout(ms) {
		return new Promise((resolve, reject) => setTimeout(resolve, ms));
	}
	await timeout(3000);
};