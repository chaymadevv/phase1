function tournezManege(){
    var nbTours = parseInt(window.prompt("combien de tours à faire?"));
    while (isNaN(nbTours) || nbTours <= 0 || nbTours > 10) {
        nbTours = parseInt(
            window.prompt("Veuilllez aisir une valeur valide entre 0 et 10.")
        )
    }
  for (var i = 1; i <= nbTours; i++) {
    document.write("C'est le tour de manège n°" + i + "<br>");
  }
}
 tournezManege2()