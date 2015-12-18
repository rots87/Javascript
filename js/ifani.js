var num1=prompt('Ingrese el numero 1');
var num2=prompt('Ingrese el numero 2');

document.write('AND <br /><br />');
if (num1>10 && num2<10) {
	document.write('La condicion es verdadera');
}else{
	document.write('La condicion es falsa totalmente o parcialmente');
};

document.write('<br /><br /> OR <br /><br />');
if (num1>10 || num2<10) {
	document.write('La condicion es verdadera');
}else{
	document.write('La condicion es falsa totalmente o parcialmente');
};