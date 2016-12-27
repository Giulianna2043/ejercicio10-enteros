function calcular()

{
    var b = document.getElementById("b").value;
	var a = document.getElementById("a").value;
    var salida = document.getElementById("salida");
    
    if((a==10 || b==10) || (a+b==10))
    {
        salida.innerHTML="1";
    }
    else {
        salida.innerHTML="0";
    }

}



