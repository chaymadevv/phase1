var heures = parseInt(window.prompt("quel heure est-il?"));
while (isNaN(heures) || heures > 24 || heures < 0) {
    heures = parseInt(window.prompt("heure invalide"));
}
var min = parseInt(window.prompt("minutes?"));
while (isNaN(min) || min > 60 || min < 0) {
  min = parseInt(window.prompt("minutes invalide"));
}

var sec = parseInt(window.prompt("secondes?"));
while (isNaN(sec) || sec > 60 || sec< 0 ) {
  sec = parseInt(window.prompt("secondes invalide"));
}

secondes++;
if (secondes == 60){
    sec = 0;
    min++;
    if(min== 60){
        
    }
}