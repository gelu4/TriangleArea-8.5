
	var a = 5;
	var h = 8;
	var triangleArea = (a*h/2);
	//console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
	document.getElementById("wynik").innerHTML = ('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);



// triangle area with prompt

var valuea = prompt('Write value a');
var valueh = prompt('Write value h');
var triangleArea1 = (valuea*valueh/2);
//console.log('Triangle Area is: ' + triangleArea1);
document.getElementById("wynik2").innerHTML = (' Triangle Area is: ' + triangleArea1);
