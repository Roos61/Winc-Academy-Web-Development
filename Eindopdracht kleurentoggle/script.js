//hamburgerBtn is het open-/dichtklappen van het hamburgermenu
const hamburgerBtn = document.querySelector(".hamburgerBox");
const homeBtn = document.getElementById("lightgrey");
const yellowBtn = document.getElementById("yellow");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const purpleBtn = document.getElementById("purple");

//klikken op menu icoon laat kleurenlijst zien
hamburgerBtn.addEventListener("click", function () {
    setColorBackGround("lightgrey");
});

//klikken op kleur wijzigt background color voor hele scherm met setColorBackGround
const toggleColor = function () {
    homeBtn.addEventListener("click", function () {
        setColorBackGround("lightgrey");
    });

    yellowBtn.addEventListener("click", function () {
        setColorBackGround("yellow");
    });

    redBtn.addEventListener("click", function () {
        setColorBackGround("red");
    });

    blueBtn.addEventListener("click", function () {
        setColorBackGround("blue");
    });

    purpleBtn.addEventListener("click", function () {
        setColorBackGround("purple");
    });
}
toggleColor();

//functie setColorBackGround voegt toe en verwijdert extra achtergrondkleur
const setColorBackGround = function (param) {
    if (document.body.classList.contains(param)) {
        document.body.classList.remove("yellow", "red", "blue", "purple");
    } else {
        document.body.classList.toggle(param, true);
    };
    btnVisibleOrNot();
}

// functie om de zichtbaarheid van de kleuren aan of uit te zetten
const btnVisibleOrNot = function () {
    let getColorBtn = document.getElementsByClassName("colorBoxChild");
    let arrayLength = getColorBtn.length;
    let i = 0;
    while (i < arrayLength) {

        if (getColorBtn[i].style.visibility === "hidden") {
            getColorBtn[i].style.visibility = "visible";
        } else {
            getColorBtn[i].style.visibility = "hidden";
        }
        i++;
    }
};






























