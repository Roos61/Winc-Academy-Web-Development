// let colors = ["yellow", "blue", "red", "orange"]
// while (colors < colors.length) {
//     colors++;
// }
// console.log(colors);

// let colors = ["yellow", "blue", "red", "orange"]
// for (i = colors; colors <= colors.length; i++) {
// }
// console.log(i);

// let colors = ["yellow", "blue", "red", "orange"]
// colors.forEach(element => console.log(element));

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// while loop: 5 regels, for-loop: 4 regels
// Hoeveel regels neemt mijn forEach method in beslag?
// forEach method: 2 regels
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// een forEach is makkelijker leesbaar, gebruikt minder hulpmiddelen (i; color.length)
// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// hiervoor gebruik je de for-in loop: for…in — loops through the properties of an object maar alleen als het enumerables zijn
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
// nee, je maakt alleen een opsomming

let colors = { 1: "yellow", 2: "blue", 3: "red", 4: "orange", 5: "white" };
for (const property in colors) {
    console.log(`${property}: ${colors[property]}`);
}
