var n1 = 10;
var n2 = 5;

var add = n1 + n2;
var moins = n1 - n2;
var mul = n1 * n2;
var div = n1 / n2;

document.write(add + " " + moins + " " + mul + " " + div )

console.log(add);
console.log(typeof add);
console.log(moins);
console.log(typeof moins);
console.log(mul);
console.log(div);
console.log(typeof div);

// -- 5. Moodulo
// -- Le Modulo retourne le reste d'une Division
// -- modulo de nb1 % nb2 avec l'opperateur "%"
resultat = n1 % n2;
console.log(resultat);

var n3 = 100;
var n4 = 17;
var resModulo = n3 % n4;
console.log(resModulo);
 
// Afficher le texte suivant sur la page du navigateur en utlisant les variables :
//"Le reste de la division de 100 par 17 est égal à ?"

  ("Le reste de la division de " + n3 +" par " + n4 + " est égal à :" + resModulo);
