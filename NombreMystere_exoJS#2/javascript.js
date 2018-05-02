/*Nombre mystère
Il faut deviner le nombre choisi par l'ordinateur
Choisir un nombre entre 0 et 9
Le programme dit si le nombre mystère est plus ou moins
Après 3 tentatives, la partie est perdue
Bonus
Pouvoir choisir les nombres min et max
Pouvoir choisir le nombre de tentatives

*/


function myst() {
  var aleatoire = Math.floor(Math.random()*10);
    console.log(aleatoire);
  for(var i=0; i<3; i++) {

  var chiffre = prompt("Entrer un chiffre");
  if (aleatoire == parseInt(chiffre)) {
    alert("Bravo");
    return "lol";
  } else if (aleatoire < parseInt(chiffre)) {
    alert("C'est -");
    
  } else if (aleatoire > parseInt(chiffre)) {
    alert("C'est +");
    
  } else {
    alert("je ne comprend pas");
  }
}
alert("Perdu");
}
