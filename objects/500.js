// Fill in the code below so that the tests pass.

const people = [];

people.push({
    "name": "Saqib",
    "favourite_food": "salad",
});

people.push({
    "name": "Shadi",
    "favourite_food": "mango",
});

people.push({
    "name": "Navid",
    "favourite_food": "macarons",
});

const favouriteFoods = [];
// const favouriteFoods = people[0].favourite_food
// for each favourite_food in people {
//    favouriteFoods.push(person.favourite_food);
// });

/* for (person of people) {
favouriteFoods.push(person.favpurite_food)}

people.forEach(person => {
    favouriteFoods.push(person.favourite_food);
});

const favoriteFood = people.map(person) => person.favourite_food
*/


// TODO: Fill the array favouriteFoods with the favourite foods of each person.
// You must not type the strings (i.e. your solution should not involve you typing the word "salad").

console.assert(favouriteFoods.length === 3);
console.assert(favouriteFoods.includes("salad"));
console.assert(favouriteFoods.includes("mango"));
console.assert(favouriteFoods.includes("macarons"));

//add message un each to know
