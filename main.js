$(document).ready(function() {

    // Visualizzare in pagina 5 numeri casuali.
    var numeri_casuali = [];
    for (var i = 0; i < 5; i++) {
        var numero_corrente = getRndInteger(1, 100);
        numeri_casuali.push(numero_corrente);
    }
    $('#number-random').text(numeri_casuali);
    console.log(numeri_casuali);

    // Da lì parte un timer di 30 secondi.
    var time = 5;
    var clock = setInterval(function() {

        // stampo il countdown
        $('#countdown').text(time);
        time--;

        // Dopo 30 secondi, vengono rimossi i numeri dalla pagina
        if(time < -1) {
            $('#number-random').toggle();
            $('#hide').hide();
            $('#alert').toggle();
        }


        if(time < -2) {
            clearInterval(clock);

        // l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
        var numeri_corretti = [];
        var numeri_sbagliati = [];

        for (var i = 0; i < 5; i++) {
            var numero_prompt = parseInt(prompt('Bene! Ora inserisci uno alla volta i numeri che hai memorizzato'));
        // se il numero inserito dell'utente è corretto....
            if (numeri_casuali.includes(numero_prompt) === true)   {
                numeri_corretti.push(numero_prompt);
        //altrimenti....
            } else {
                numeri_sbagliati.push(numero_prompt);
            }


        }
        console.log(numeri_corretti);
        console.log(numeri_sbagliati);
        }
    }, 1000);




    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
