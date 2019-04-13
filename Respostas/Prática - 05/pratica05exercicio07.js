function resultado() {
    var text = ""
    var cont=0;
    var n1 = document.getElementById("Numero1").value;
    var n2 = document.getElementById("Numero2").value;

   for (var i = n1; i <= n2; i++) {
    cont = cont + i
     }
    text += "<br/> Resultado: " + cont;

    document.getElementById ("resposta").innerHTML = text;
 }
