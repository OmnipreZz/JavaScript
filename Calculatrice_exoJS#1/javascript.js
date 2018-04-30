

function calcul() {
  
	var nbr1 = parseInt(document.getElementById('n1').value);
    var nbr2 = parseInt(document.getElementById('n2').value);

  if (document.getElementById('r1').checked) {
    var addition = nbr1 + nbr2;
    document.getElementById('afficher').innerHTML = addition;
  } else if (document.getElementById('r2').checked){
    var soustraction = nbr1 - nbr2;
    document.getElementById('afficher').innerHTML = soustraction;
  } else if (document.getElementById('r3').checked){
    var multiplication = nbr1 * nbr2;
    document.getElementById('afficher').innerHTML = multiplication;
  } else if (document.getElementById('r4').checked){
    var division = nbr1 / nbr2;
    document.getElementById('afficher').innerHTML = addition;
  } else {
    document.getElementById('afficher').innerHTML = "je n'ai pas compris";
  }

}




