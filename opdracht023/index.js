let eigenNaam = prompt("Wat is je naam?");
alert("Hoi, " + eigenNaam);
alert("Voer een nummer in van 0 tot 25 om te beginnen met raden. Je mag 5x raden...");
let kleinsteInvoer = parseInt(prompt("Wat is het kleinste getal dat je wilt gebruiken?"));
let grootsteInvoer = parseInt(prompt("Wat is het grootste getal dat je wilt gebruiken?"));
let invoer = parseInt(prompt("Geef een nummer op tussen " + kleinsteInvoer + " en " + grootsteInvoer + ". Je mag 5x raden..."));

function getRandomInt(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min)
}
let willekeurigGetal = getRandomInt(kleinsteInvoer, grootsteInvoer);

function isGelijk(willekeurigGetal, invoer) {
    if (willekeurigGetal != invoer) {
        return false;
    } else {
        return true;
    }
}

let guess = 4;
while ((guess > 1) && (!isGelijk(willekeurigGetal, invoer))) {
    alert("Dat is niet correct, probeer een ander nummer. Je mag nog " + (guess--) + " keer raden");
    invoer = prompt("Geef een ander nummer op ");
}
if (isGelijk(willekeurigGetal, invoer)) {
    alert("Gefeliciteerd je hebt gewonnen!");
} else {
    alert("je hebt 5x geraden, einde spel");
}
alert("Dag " + [eigenNaam] + ". Tot de volgende keer");