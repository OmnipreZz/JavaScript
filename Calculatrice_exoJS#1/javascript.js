/*Calculatrice
Réaliser un calculatrice simple
Choisir une opération : + * / -
Choisir un 1er nombre
Choisir un 2eme nombre
Afficher le résultat
Bonus
Améliorer l'UI/UX pour que cela ressemble à une vraie calculatrice
*/


function nombreUn() {
	var nbr1 = prompt("Entrer un nombre");
	return(nbr1);
}

function nombreDeux() {
	var nbr2 = prompt("Entrer un nombre");
	return(nbr2);
}

function operator() {
	var opt = prompt("Entrer un operateur")
	if (opt == "+") {
		alert(nbr1 + nbr2);
	} else if (opt == "-") {
		alert(nbr1 - nbr2);
	} else if (opt == "*") {
		alert(nbr1 * nbr2);
	} else if (opt == "/") {
		alert(nbr1 / nbr2);
	} else {
		operator();
	}

}

nombreUn();
nombreDeux();
operator();

