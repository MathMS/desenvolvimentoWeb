<<<<<<< HEAD
function resultado() {
  var fTemp = document.getElementById("Numero1").value;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F - ' + fToCel + '\xB0C.';
    
   document.getElementById ("resposta").innerHTML = message;

=======
function resultado() {
  var fTemp = document.getElementById("Numero1").value;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F - ' + fToCel + '\xB0C.';
    
   document.getElementById ("resposta").innerHTML = message;

>>>>>>> 95ac1fa647f8c843e772f2ac0120be4677e870ea
}