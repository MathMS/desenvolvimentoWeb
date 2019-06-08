<<<<<<< HEAD
function clicar() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)){
        document.getElementById("media").innerHTML = "Por favor, informe todos os campos.";
    }
    else {
        document.getElementById("media").innerHTML = ((valor1 + valor2 + valor3) / 3);
    }
    showDiv("resp");
=======
function clicar() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)){
        document.getElementById("media").innerHTML = "Por favor, informe todos os campos.";
    }
    else {
        document.getElementById("media").innerHTML = ((valor1 + valor2 + valor3) / 3);
    }
    showDiv("resp");
>>>>>>> 95ac1fa647f8c843e772f2ac0120be4677e870ea
}