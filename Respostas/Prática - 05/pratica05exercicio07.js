<<<<<<< HEAD
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
=======
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
>>>>>>> 95ac1fa647f8c843e772f2ac0120be4677e870ea
