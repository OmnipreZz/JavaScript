function Login(){
  var adress = prompt ("Entrer votre adresse mail:");
  var n = adress.indexOf("@");
    
  if(adress.length >4 && n !== -1){
  alert ("ok")
  return adress;
}else{
  alert("Adresse non valide")
  Login();
}
}

function mdp(){
  var motDePass = prompt ("Entrer votre mot de passe:");
  return motDePass;
}


var newAdress = Login();
if (newAdress === "lea@gmail.com"){
  var newMdp = mdp();
  if(newMdp === "12345"){
    alert("salut lea");
  }else{
    mdp();
  }
  
}else{
  Login()
}

console.log (newAdress);
console.log (newMdp);
