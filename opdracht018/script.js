// checks if a number is bigger than 100
// function isBigger(getal) {
//     if (getal > 100) { return true; }
//     else { return false; }
// }
//isBigger(200);
// console.log(isBigger(100));
// console.log(isBigger(110));

// const maxAantal = 100;
// function hoeveelMensen(age, huidigAantal) {
//     if (age < 18) { return "this is a club for adults"; }
//     else if (huidigAantal < maxAantal) { return "come in"; }
//     else { return "it's too busy now, come back later"; }
// }
// console.log(hoeveelMensen(19, 100));

// A function that calculates the average of five numbers

let sum = 0;
function calcAverage(nummers) {
    for (var i = 0; i < nummers.length; i++) {
        sum = sum + nummers[i];
    }
    return sum / nummers.length;
}
console.log(Math.round(calcAverage([27, 4, 91, 8, 77])));
