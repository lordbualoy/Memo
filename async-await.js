//result of async function is actually a promise #1
async function f() {
  return 1;
}
f().then(()=>console.log("called"));

//result of async function is actually a promise #2
async function f() {
  return Promise.resolve(1);
}
f().then(()=>console.log("called"));

//await
//to use await keyword in the function the function itself is required to have async modifier assigned first
async function main() {
	async function f() {
	  return 1;
	}
	let result = await f();		//result == 1
	console.log("called");
}

//await settimeout
//to use await keyword in the function the function itself is required to have async modifier assigned first
async function main(){
	function timeout(ms) {
		return new Promise((resolve, reject) => setTimeout(resolve, ms));
	}
	await timeout(3000);
};