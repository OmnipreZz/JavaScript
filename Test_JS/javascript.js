                                
                                // Les Boucles

var nbr1 = parseInt (prompt("Veuillez entrer votre premier nombre:"));
while(isNaN(nbr1)){
  nbr1 = parseInt(prompt("Je n'ai pas bien compris... Vueillez entrer votre premier nombre:"));
}

var nbr2 = parseInt (prompt("Veuillez entrer votre second nombre:"));
while(isNaN(nbr1)){
  nbr1 = parseInt(prompt("Je n'ai pas bien compris... Veuillez entrer votre second nombre:"));
}

var resultat = nbr1 + nbr2;




do {
  nbr1 = parseInt(prompt("Vueillez entrer votre premier nombre:"));
} while(isNaN(nbr1));

do {
  nbr2 = parseInt(prompt("Veuillez entrer votre second nombre:"));
} while(isNaN(nbr2))

var resultat = nbr1 + nbr2;


alert (nbr1 + " + " + nbr2 + " = " + resultat);




for(var i = 0; i <= 10; i++) {
	console.log(i);
}



                                   // Les Tableaux


var pseudo = "Omni";
var tableau = ["PHP", "C++", "Ruby", 15, pseudo];
var langageProg = tableau[3];

console.log(tableau);
console.log(tableau[1]);
tableau[4] = "Python";
console.log(tableau);
tableau.pop();// supprime derniére valeur
tableau.shift();// supprime premiére valeur
tableau.push(["HTML", "CSS"]);
console.log(tableau);



var langagesProg = [];

while(true) {
	var promptText = prompt("Entrer un langage de programmation");
	if(promptText != " ") {
		langagesProg.push(promptText);
	} else {
		break;
	}
}

console.log(langagesProg);


var langageProg = ["C++", "C#", "Ruby", "Python"];

alert(langageProg[0]);
alert(langageProg.indexOf("Ruby"));

var promptText = prompt("Entrer le nom d'un langage de prog");
if(langageProg.indexOf(promptText) != -1) {
	alert("Ton langage existe");
} else {
	alert("Ton langage n'existe pas");
}


langageProg.splice(1, 2, "PHP", "JS");
console.log(langageProg);

console.log(langageProg.length);

for(var i = 0; i < langageProg.length; i++) {
	alert(langageProg[i]);
}


                            // Fonctions


function nomDeLaFonction(param1, param1, param3) {

}


function ditBonjour() {
	alert("Bonjour!");
}

ditBonjour();


function additionne(nbr1, nbr2) {
	alert(nbr1 + nbr2);
}

additionne(3, 2);

function additionne(nbr1, nbr2) {
	alert(nbr1 + nbr2);
}

var prompt1 = prompt("Votre nombre 1");
var prompt2 = prompt("Votre nombre 2");



                              // Objets




function Personne(nom, age, sexe) {
	this.nom = nom;
	this.age = age;
	this.sexe = sexe;
}

var utilisateur1 = new Personne("Paul", 25, "M");
var utilisateur2 = new Personne("Matthieu", 17, "M");

utilisateur2.nom = "jean";

console.log(utilisateur1);
console.log(utilisateur2);

