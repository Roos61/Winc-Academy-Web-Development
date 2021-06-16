//create a function that has one parameter: the age
// function leeftijd(number) {
//     if (number >= 18) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function age2(input) {
//     if (leeftijd(input)) {
//         return "Hello there";
//     } else {
//         return "Hey kiddo";
//     }
// }
// console.log(age2(16));

//a function that takes the base price and the VAT percentage and returns the price including VAT
// function totalAmount(basePrice, percentage) {
//     total = basePrice + VAT(basePrice, percentage);
//     console.log(" totaal is " + total);
//     return total;
// }
//console.log(totalAmount);

// do the calculation of the VAT amount in a separate function
// function VAT(basePrice, percentage) {
//     if (percentage == 21) {
//         BTW = basePrice * 0.21;
//     }
//     else if (percentage == 9) {
//         BTW = basePrice * 0.09;
//     }
//     else {
//         BTW = basePrice * 0.00;
//     }
//     return BTW;
// }
// console.log(totalAmount(63.10, 0));

//The main function you make should take the amount including VAT and the VAT percentage. Dus: prijs incl. BTW en BTW-percentage. The return value should be an array with two elements: base price and VAT amount.
function basePrice(totalAmount, vatBedrag) {
    total = totalAmount - vatBedrag;
    return total;
}

//functie om VAT uit totaalbedrag te halen
function removeVAT(totalAmount, percentage) {
    percBTW = 1 + (percentage / 100);
    if (percentage == 21) {
        vatBedrag = totalAmount - (totalAmount / percBTW);
    } else if (percentage == 9) {
        vatBedrag = totalAmount - (totalAmount / percBTW);
    };
    return [basePrice(totalAmount, vatBedrag), vatBedrag];
}
console.log(removeVAT(2.18, 9));