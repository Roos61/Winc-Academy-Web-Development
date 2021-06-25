//const btn1 = document.querySelector("body button")
const btn2 = document.getElementById("secondbutton");

//btn1.addEventListener("click", function (e) {
//     alert("button clicked");
// })

// btn2.addEventListener("click", function (e) {
//     document.body.classList.add("red-background");
// })

btn2.addEventListener("click", function (e) {
    document.body.classList.toggle("red-background");
})