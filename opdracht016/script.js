function makePizza() {
    console.log('make dough');
    console.log('add topping');
    console.log('cook!');
}
makePizza();
makePizza();

function makeSushi() {
    console.log('cook rice');
    console.log('add sushifish');
    console.log('roll!');
}
// makeSushi();
// makeSushi();
// makeSushi();

let i = 1;
while (i < 4) {
    makeSushi();
    i++;
}

