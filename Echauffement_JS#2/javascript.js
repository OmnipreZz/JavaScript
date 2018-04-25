
function question1(){
  var cheval = prompt("Quel est la couleur du cheval blanc d'Henri 4?");
  
  if(cheval === "blanc"){
    alert ("Bien!")
    return (question2());
  }else{
    alert ("Faux !!! essaye encore..")
    return (question1());
  }
}

function question2(){
  var nain = prompt("Combien y'a t'il de 7 nains");
  
  if(nain === "7"){
    return ("Bravo champion!");
  }else{
    alert ("Bouhh tu es nul !! essaye encore..")
    return (question2());
  }
}

alert(question1());


