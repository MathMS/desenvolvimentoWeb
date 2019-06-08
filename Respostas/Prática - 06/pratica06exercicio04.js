<<<<<<< HEAD
function listar () {
	var i, vetor = document.getElementsByName ("cidade");
	for (i = 0; vetor.length; i++) 
		document.getElementById ("resposta").innerHTML += "Valor: "+
	vetor[i].value + ", " + "Tag HTML: " + 
	vetor[i].tagName +","+"Tamanho visível: " +
	vetor[i].size + ", " + "Número máximo de caracteres do string informado: " + vetor[i].maxLength + ", " + "Placeholder: " +
	vetor[i].placeholder + "<br>"; 
=======
function listar () {
	var i, vetor = document.getElementsByName ("cidade");
	for (i = 0; vetor.length; i++) 
		document.getElementById ("resposta").innerHTML += "Valor: "+
	vetor[i].value + ", " + "Tag HTML: " + 
	vetor[i].tagName +","+"Tamanho visível: " +
	vetor[i].size + ", " + "Número máximo de caracteres do string informado: " + vetor[i].maxLength + ", " + "Placeholder: " +
	vetor[i].placeholder + "<br>"; 
>>>>>>> 95ac1fa647f8c843e772f2ac0120be4677e870ea
} 