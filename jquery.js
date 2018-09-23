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