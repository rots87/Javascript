function check () {
	var dui = document.getElementById('dui').value;
	var arrdui = dui.split('');
	var pos = 9;
	var sum = 0;
	for (var i = 0; i < dui.length-1; i++) {
		sum+=(pos*parseInt(arrdui[i]));
		pos--;
	};
	var div = sum%10;
	var res = 10 - div;
	if (res == parseInt(arrdui[dui.length-1])){
			window.alert('El dui es valido');
		} else {
			window.alert('El dui es invalido');
		};
	
}