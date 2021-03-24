function Sumar(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	let resultado = parseInt(n1,10) + parseInt(n2,10);
	document.getElementById("resultado").value = resultado;
	
	if(n1==""){
		window.alert("Verifique que los campos no esten vacios")
	}else{
		if(n2==""){
		window.alert("Verifique que los campos no esten vacios")
	}
	}
}

function Restar(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	let resultado = parseInt(n1,10) - parseInt(n2,10);
	document.getElementById("resultado").value = resultado;
	
	if(n1==""){
		window.alert("Verifique que los campos no esten vacios")
	}else{
		if(n2==""){
		window.alert("Verifique que los campos no esten vacios")
	}
	}
}

function Multiplicar(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	let resultado = parseInt(n1,10) * parseInt(n2,10);
	document.getElementById("resultado").value = resultado;
	
	if(n1==""){
		window.alert("Verifique que los campos no esten vacios")
	}else{
		if(n2==""){
		window.alert("Verifique que los campos no esten vacios")
	}
	}
}

function Dividir(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;
	let resultado = parseFloat(n1,10) / parseFloat(n2,10);
	document.getElementById("resultado").value = resultado;
	
	if(n1==""){
		window.alert("Verifique que los campos no esten vacios")
	}else{
		if(n2==""){
		window.alert("Verifique que los campos no esten vacios")
	}
	}
}
function solonumeros(e){
	key=e.keyCode;
	teclado= String.fromCharCode(key);
	numeros="0123456789";
	especiales="8-37-38-46";
	teclado_especial=false;
	
	for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true
		}
	}
	
	if(numeros.indexOf(teclado)==-1 && !teclado_especial){
		return false;
	}
}

