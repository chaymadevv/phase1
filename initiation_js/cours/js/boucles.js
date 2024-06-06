// for (var i = 1; i <= 10; i += 2) {
//     document.write("<p> Instruction éxécutée : " + i + "</p>")
// }
// for (var j = 2; j <= 12; j += 3) {
//     document.write("<p> Instruction éxécutée : " + j + "</p>")
// }

var temps = 0 
for (var ep = 1000; ep <= 2000; ep += 50){
    document.write(" economie : " + ep + " au mois " + temps + "<br>");
    temps ++
}
var monCompte = false;
var temps = 0;

while (monCompte == false) {
    monCompte = true;
    temps++;
}

document.write("<h3>Sous sur mon compte: " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000e, il me faut : " + temps + " mois</h3");


// exo
var majoriteFr = 18;
var age = parseInt(window.prompt("Quel âge as-tu?"));
console.log(typeof age);

if (age >= 18) {
  document.write("<h1>" + "Bienvenue à toi" + "</h1>");
} else {
  alert("Vous n'avez pas l'âge requis !");
  window.open("http://www.darty.com/");
}

