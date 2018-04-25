
function question1(){
  var cheval = prompt("Quel est la couleur du cheval blanc d'Henri 4?");
  
  if(cheval === "blanc"){
    return (question2());
  }else{
    return (question1());
  }
}

function question2(){
  var nain = prompt("Combien y'a t'il de 7 nains");
  
  if(nain === "7"){
    return ("Bravo");
  }else{
    return (question1());
  }
}

alert(question1());


