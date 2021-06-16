//Schrijf een loop die "iterate" van 0 tot 20. 
//Voor elke loop, check of het huidige nummer even is of oneven (odd).
//Console.log het nummer en gebruik de modulo functionaliteit.
// for (i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log((i) + " is even");
//     } else {
//         console.log((i) + " is oneven");
//     }
// }

// Schrijf een loop die "iterate" van 0 tot 10. 
//Gebruik voor het eerste voorbeeld de tafel van 9. 
//Console.log elke keer de uitkomst van de tafel van 9 naar de console. 
// gebruik een geneste for-loop, om alle tafels van 1 t/m 10 te printen naar de console
// for (b = 1; b <= 10; b++) {
//     for (i = 1; i <= 10; i++) {
//         console.log((i) + " x " + (b) + " = " + i * b);
//     }
// }

//Schrijf een for-loop dit "iterate" van 60 tot 100. Dit is de "score" (grade)  van de student.
//Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument. 
//Console.log vervolgens: "Voor 91 punten, krijg je een A". 
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'E';
//     }
// }
for (i = 60; i <= 100; i++) {
    if (i > 90) {
        console.log("Voor " + (i) + " punten krijg je een A");
    } else if (i > 80) {
        console.log("Voor " + (i) + " punten krijg je een B");
    } else if (i > 70) {
        console.log("Voor " + (i) + " punten krijg je een C");
    } else if (i > 65) {
        console.log("Voor " + (i) + " punten krijg je een D");
    } else {
        console.log("Voor " + (i) + " punten krijg je een E");
    }
}