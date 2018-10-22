//jquery selector
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
	$(document).ready(function () {
		var a = $("div");		//var a will have a reference to JQueryObject that behave like array
	});
</script>

//How do I pull a native DOM element from a jQuery object?
$("#foo")[0];		// Equivalent to document.getElementById( "foo" )
$("#foo").get(0);	// Identical to above, only slower.

//jquery object method will affected all its member that matched the selector
<script>
	$(document).ready(function () {
		$("div").click(()=>{				//addEventListener will be added to all div that matched the selector
			$(this).text("blabla");			//will set innerText to blabla
			var bool = $(this)[0] === this;	//true
		});
	});
</script>

//$.ajax
//post application/x-www-form-urlencoded (FormData)
let obj1 = [{ name: "a", value: 1 }
	, { name: "b", value: 2 }
	, { name: "c", value: 3 }
];

let obj2 = { a : 1 
  , b : 2
  , c : 3
};

let result1 = $.param(obj1);
let result2 = $.param(obj2);

console.log(result1 === result2);	//true

//(1) will httppost with contentType = application/x-www-form-urlencoded
//(2) post with string
$.ajax({
	"dataType": 'json',		//this actually mean accept json not contentType = json
	"type": "POST",
	"url": "",
	"data": result1
});

//(1) will httppost with contentType = application/x-www-form-urlencoded
//(2) post with object : if data is Object jquery will send the object into $.param(Object) first before actually do the XHR which mean sending either obj1 styled object or obj2 styled object will result in the same body
$.ajax({
	"dataType": 'json',		//this actually mean accept json not contentType = json
	"type": "POST",
	"url": "",
	"data": obj1
});


//post application/json
let obj = { a : 1 
  , b : 2
  , c : 3
};

let result = JSON.stringify(obj);

//(1) will httppost with contentType = json
$.ajax({
	contentType: 'application/json',
	"dataType": 'json',		//this actually mean accept json not contentType = json
	"type": "POST",
	"url": "",
	"data": result
});

//**posting json with Object via $.ajax is not possible!**
//(1) will httppost with contentType = json
//(2) post with object : if data is Object jquery will send the object into $.param(Object) first before actually do the XHR which mean the actual text in the body will be querystring formdata which is invalid json!
$.ajax({
	contentType: 'application/json',
	"dataType": 'json',
	"type": "POST",
	"url": "",
	"data": obj
});
