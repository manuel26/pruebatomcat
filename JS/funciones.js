/* Funciones en Javascript */

window.onload = function(){
	//Se captura en variales el id de cada componente
        var nombre = document.getElementById('numero');
        var boton = document.getElementById('aceptar');
	//Se ejecuta el metodo al dar click sobre el boton
        boton.onclick = function factorial() {
        	var n = parseInt(numero.value);
		var i, f = 1;
		for(i = 1; i <= n; i++) {
			f = f * i;
		}
	alert("El factorial es: " + f);	//Imprime en ventana		
	}
}
