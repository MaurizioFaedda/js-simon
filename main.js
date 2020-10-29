$(document).ready(function() {

    // Visualizzare in pagina 5 numeri casuali.
    var numeri_casuali = [];
    for (var i = 0; i < 5; i++) {
        var numero_corrente = getRndInteger(1, 100);
        numeri_casuali.push(numero_corrente);
    }
    console.log(numeri_casuali);

    // Da lì parte un timer di 30 secondi.
    var time = 30;
    var clock = setInterval(function() {

        // stampo il countdown
        console.log(time);
        time--;

        if(time < 0) {
            clearInterval(clock);
            console.log('Hai finito il tempo per memorizzare i tuoi numeri');
        }
    }, 1000);
    // Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
