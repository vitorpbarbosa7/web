
// global escope var
var myGlobal = 10;

function fun1() {
	var oopsGlobal = 5;
	}

function fun2() { 
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal:" + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += "oopsGlobal: " + oopsGlobal;
	}

	console.log(output)
}

fun1();
fun2();
