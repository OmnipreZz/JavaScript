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
