var j1 = "lundi";
var j2 = "mardi";
var j3 = "mercredi";
var j4 = "jeudi";
var j5 = "vendredi";
var j6 = "samedi";
var j7 = "dimanche";

var jour = window.prompt("jour de la semaine:")
var error = "jour inconnu"

if (jour == j1) {
    alert(j2)
}
else if (jour == j2) {
    alert ( j3)
}
else if (jour == j3) {
    alert ( j4)
}else if (jour == j4) {
    alert ( j5)
}
else if (jour == j5) {
    alert ( j6)
}
else if (jour == j6) {
    alert ( j7)
}
else if (jour == j7) {
    alert ( j1)
} else {
    alert(error)
}