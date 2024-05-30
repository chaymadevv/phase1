// syntaxe de base

/*

Commentaire 

*/
/*
      Ici, je fais un commmentaire sur 
      plusieurs lignes
 */

// Déclarer une variable :
var prenom,
  monNom = "Izadi";
// alert("Kilic");
// alert(monNom);

var prenomPourMonProjet;

// -- 2 : Affecter une valeur a une variable
prenom = "Mila";

var prenom2 = "Sirine";
// alert(prenom);

// --3 : une instruction se termine TOUJOURS par un point- virgule, aussi il est possible d'ecrire plusieurs introductions sur une seule ligne
//inst_1;
//inst_2; inst_3;

//--5 : Afficher dans la console (ici, la valeur de ma variable Prenom)
console.log(prenom);

document.write(monNom + "<br>");
// document.write(prenom + "<br>");
// document.write("A la pause vous allez voir Nolann faire un twerk");

// var jourSemaine = window.prompt(
//   "Question: on est quel jour?",
//   "jour de la semaine"
// );

document.write("jourSemaine" + "<br>");
console.log("Mercredi");
console.log("JourSemaine");

//--9 : Une variable ne peut pas commencer par un chiffre, ne doit pas contenir que des caracteres alphanumeriques, et ne peut pas etre un mot reservé (var, for... des elements natifs du langage JS)

var chaineDeCaractere = "ma variable";
var unChiffre = 2;
var cetteAnnee = 2024;
var stringAddition = "2+5";
var addition2Number = 2 + 6;

// types de variables :
// string "maison"
// 2 integrer : 4, 5, ...
// 3 boolean true / false
// 4 float 12.56

// console.log(typeof cetteAnnee);
// alert(chaineDeCaractere);
// document.write(unChiffre);

console.log(cetteAnnee, stringAddition);
var convertNumberToString = addition2Number.toString();
console.log(typeof addition2Number);
console.log(typeof convertNumberToString);
