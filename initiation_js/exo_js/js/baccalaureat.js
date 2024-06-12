
var noteRecal = 10;
var noteRecu = 12;
var noteBien = 20;
var moyenne = window.prompt("Insérez votre moyenne");
moyenne = parseInt(moyenne);

while(isNaN(moyenne) || moyenne > noteBien || moyenne < noteNegative )
// console.log("si le tpe d'une variable est string la fonction "isNaN retourne 'true')
if (!isNaN(moyenne))
 if (moyenne >10 ) {
     alert("vous etes recalé");
} else if ( moyenne >= 10 && moyenne < 12){
 document.write("vous etes recu !")
 } else if (moyenne >= 12 && moyenne <= 20) {
     document.write("vous etes recus avec mention"); } else {
     document.write(" note invalide");
}

//isNaN ("is not a  nomber") est une fonction qui prend un parametre (parametre est un element entre parenthese ) elle analyse ce parametre et elle retourne un boolean sois false soit true apres cette analyse si se type de parametre est une chaine de caratere isNaN il retourne true si c'est une valeur numerique u=ol indique false


var maValeur = window.prompt("saisissez unz valeur ...");
var resBoolean = isNaN(maValeur);
// si la valeur de resBoolean est false afficher le message : le type de votre valeur est numerique 
if (!resBoolean) {
    document.write("Le type de votre saisi")
     
 }