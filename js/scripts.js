function triangleArea(a, h) {
	var result = (a * h / 2);
	return result;
}

var a = 5;
var h = 8;
document.getElementById("score").innerHTML = 'Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea(a, h);

// triangle area with prompt


var a = prompt('Enter the base value');
var h = prompt('Enter the height value');

if (isNaN(a) || isNaN(h)) {
	document.getElementById("score2").innerHTML = 'Musisz wpisać liczby';
} 
else {
	document.getElementById("score2").innerHTML = ' Triangle Area is: ' + triangleArea(a, h);
}


// triangle area with two number area
function area2() {
	var a = document.getElementsByTagName("input")[0].value;
	var h = document.getElementsByClassName("value2")[0].value;
	if (isNaN(a) || isNaN(h)) {
		document.getElementById("score3").innerHTML = 'Musisz wpisać liczby';
	} 
	else {
		document.getElementById("score3").innerHTML = ' Triangle Area is: ' + triangleArea(a, h);
	}
}