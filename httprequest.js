var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json');
httpRequest.send();
httpRequest.onreadystatechange = function() {
	if (httpRequest.readyState === 4 && httpRequest.status === 200) {
		var json = httpRequest.responseText;
		var httpResult = JSON.parse(json);
	}
};

//readyState 4 = DONED, status = http code


var requestData = {
    type: "GET",
	url: "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json",
};
$.ajax(requestData)
.done((data, status)=>{
	console.log(data);
})
.fail((xhr, status, error)=>{
	console.log(status);
});