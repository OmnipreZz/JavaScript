function question1() {


var cheval = prompt("Quelle est la couleur du chavel blanc d'Henri 4 ?");

if(cheval === "blanc"){
	return("Vrai");
}else{
	return("Faux");
}
};

function question2() {

var nain = prompt("Combien y a t'il de 7 nains");

if(nain === "7"){
	return("Tu es trop fort!!");
}else{
	return("Bouuh tu es nul!!");
}
};

alert(question1());
alert(question2());


