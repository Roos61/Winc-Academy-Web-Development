// take two numbers
// each number will be squared (multiplied with itself)
// the squared numbers will be added together
// this sum will be squared again
// the resulting value is returned

function versionDeclaration(nummer1, nummer2) {
    squared1 = Math.pow(nummer1, 2);
    squared2 = Math.pow(nummer2, 2);
    addNummer = squared1 + squared2;
    squared3 = Math.pow(addNummer, 2);
    return squared3;
}
console.log(versionDeclaration(3, 4));

// const versionConstant = function (nummer1, nummer2) {
//     squared1 = Math.pow(nummer1, 2);
//     squared2 = Math.pow(nummer2, 2);
//     addNummer = squared1 + squared2;
//     squared3 = Math.pow(addNummer, 2);
//     return squared3;
// };
// console.log(versionConstant(2, 5));

// const versionArrow = (nummer1, nummer2) => {
//     squared1 = Math.pow(nummer1, 2);
//     squared2 = Math.pow(nummer2, 2);
//     addNummer = squared1 + squared2;
//     squared3 = Math.pow(addNummer, 2);
//     return squared3;
// };
// console.log(versionArrow(2, 5));