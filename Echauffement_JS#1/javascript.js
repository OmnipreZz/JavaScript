
function nom() { //ici ma fonction

var id = prompt ("Comment tu t'appelles?"); //ici ma variable

if(id.length <10 && id.length >1){ //ici ma condition (si id entre 1 et 10 lettres return bonjour sinon retour a la function nom())
  return("Bonjour, " + id + "!");
}else{
  return(nom());
}
}

alert(nom()); //appelle ma fonction dans une boite alert

