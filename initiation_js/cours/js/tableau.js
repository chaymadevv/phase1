// var fruits;
// fruits = ["Apple", "banana"];
// var tailleTab = fruits.length;
// console.log(tailleTab);
// console.log(fruits[0]);
// console.log(fruits [tailleTab-1])

// var couleurs;
// var couleurs =["pink , black , purple"];
// var tailleCouleurs = couleurs.length;
// console.log(tailleTab);


// var couleurs
// var couleurs = ["rouge", "jaune", "bleu", "vert", "orange"];
// for (var i = couleurs.lenght; i >= 0; --i) {
//   console.log(couleurs[i]);
// }

// for (var i = 10; i >= 0; i--){
//     document.write(i + "<br>")
// }


fruits = ["Apple", "Banana"];
//Ajouter à la fin du tableau
var newLength = fruits.push("Orange");

console.log(fruits);
console.log(newLength);
//Ajouter à la fin du tableau
var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

//Supprimer le dernier élément du tableau
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

//Supprimer le premier élément du tableau
var first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

//Ajouter au début du tableau
var newLength = fruits.unshift("Strawberry"); // ajoute au début
// ["Strawberry", "Banana"];

// push ajoute un element a la fin du tableau 