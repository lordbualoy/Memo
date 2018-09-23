var myApp = (function() {
 
    var id= 0;
 
    return {
        next: function() {
            return id++;
        },
 
        reset: function() {
            id = 0;
        }
    };  
})();
 
window.console && console.log(
    myApp.next(),
    myApp.next(),
    myApp.reset(),
    myApp.next()
) //0, 1, undefined, 0


var myApp = {};
(function(context) {
    var id = 0;
 
    context.next = function() {
        return id++;
    };
 
    context.reset = function() {
        id = 0;
    }
})(myApp);
 
window.console && console.log(
    myApp.next(),
    myApp.next(),
    myApp.reset(),
    myApp.next()
) //0, 1, undefined, 0
