/*Le programme tire au hasard une opération ( + * - ) et deux chiffres
Le programme demande le résultat de l'opération à l'utilisateur » ex : "combien font 4 * 7"
Affiche si la réponse est juste ou fausse
*/

var nbr1 = Math.floor(Math.random() * 10);
var nbr2 = Math.floor(Math.random() * 10);

var result;


function randOperator() {

var operator = Math.floor(Math.random() * 3);

  if (operator === 0) {
    console.log(nbr1 + nbr2);
    alert("Combien font" + nbr1 + "+" + nbr2);
  } else if (operator === 1) {
    console.log(nbr1 - nbr2);
  } else if (operator === 2) {
    console.log(nbr1 * nbr2);
  }

} 

randOperator();