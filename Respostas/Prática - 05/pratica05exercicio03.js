function identificar () {
  var n1 = document.getElementById ("numero").value;
  if (n1%2 == 0)
    var identifica = "Esse número é par!"
  else
    var identifica = "Esse número é ímpar!"
  document.getElementById ("identifica").innerHTML = identifica;
}
