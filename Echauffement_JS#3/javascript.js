function Log() {

var login = prompt("Quel est ton adresse mail ?", "lea@gmail.com");
var mdp = prompt("Mot de passe:");


if(login === "lea@gmail.com"){
	return(mdp);
}else{
	return("Non valide");
}

};

alert(Log());