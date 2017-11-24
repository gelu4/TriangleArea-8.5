
var a = 5;
var h = 8;
var triangleArea = (a*h/2);
document.getElementById("score").innerHTML = 'Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea;

// triangle area with prompt


	var valuea = prompt('Enter the base value');
	var valueh = prompt('Enter the height value');	
	/*var valuea = document.getElementById('value1').value;
	var valueh = document.getElementById('value2').value;*/	
	var triangleArea1 = (valuea*valueh/2);

	if ((isNaN(valuea)) || (isNaN(valueh))) {
	document.getElementById("score2").innerHTML = 'Musisz wpisać liczby';
	}

	else {
	document.getElementById("score2").innerHTML = ' Triangle Area is: ' + triangleArea1; 
	}


// triangle area with two number area
function area2() {
	var valuea = document.getElementById('value1').value;
	var valueh = document.getElementById('value2').value;	
	var triangleArea1 = (valuea*valueh/2);
	if ((isNaN(valuea)) || (isNaN(valueh))) {
	document.getElementById("score3").innerHTML = 'Musisz wpisać liczby';
	}
	else {
	document.getElementById("score3").innerHTML = ' Triangle Area is: ' + triangleArea1; 
	}
}