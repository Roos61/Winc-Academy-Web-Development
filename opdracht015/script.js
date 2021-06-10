let person = {
    name: "Rosalie",
    age: 59,
    evaluations: [7, 10, 9],
    kleuren: ["rood", "groen", "paars"]
};
//console.log(person);
//console.log(person.name);
//console.log(person.age);
//console.log(person["name"]);
//console.log(person["age"]);
//console.log(person.evaluations);
//console.log(person["evaluations"]);
//console.log(person.kleuren);
//console.log(person.kleuren.length);
//console.log(person.kleuren[0]);
//console.log(person.kleuren[person.kleuren.length - 1]);
//person.kleuren.push("geel");
//console.log(person.kleuren);
//person.kleuren.push("geel", 5);
//console.log(person.kleuren);
person.kleuren.push("geel", 5, { greeting: "hi ik ben een object" });
console.log(person.kleuren[person.kleuren.length - 1]);