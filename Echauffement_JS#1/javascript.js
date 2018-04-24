
function TonNom() {

var nom = prompt("Comment tu t'appelles ?");

if (nom.length <= 10 && nom.length >= 2) {
	return ("Bonjour, " + nom);
}else{
	return ("Non valide");
}
};

alert(TonNom());

