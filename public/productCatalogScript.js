var count = 0;
var activation = false;
var records = document.getElementById("records");

document.getElementById('startstop').onclick = function(){
  if (activation === false){   //si inactif au moment du click on l'active
    console.log(activation);
    activation = true
  }else { //sinon on le desactive
    console.log(activation)
    activation = false
  }
}

setInterval(function () { //on va toute les seconde afficher puis si actif incrementer
  document.getElementById('timer').innerHTML = count;
  if (activation=== true){
    count+=0.01;
  }
  console.log(count);
},100)



document.getElementById('reset').onclick = function(){
  count = 0;
  while (records.firstChild) {
    records.removeChild(records.firstChild);
  }
}

document.getElementById('recordtime').onclick = function(){
  var tr = document.createElement("tr");
  records.appendChild(tr).innerHTML = count;
}
