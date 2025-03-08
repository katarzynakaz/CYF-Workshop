// Predict and explain...
// What will be logged by this code?
// Check your prediction and explanation by running the code.

const person1 = {
    "name": "Abdi",
    "location": "London",
    "id_number": 17,
};

const person2 = {
    "name": "Shadi",
    "job": "Software Engineer",
    "location": "London",
    "id_number": 28,
};

const person3 = person2;

person3.location = "Manchester";

console.log(person1.name); // abdi
console.log(person2["name"]); //shai
console.log(person1.id_number > person2["id_number"]); // false 
console.log(person1.job); // undef
console.log(person1.location === person2.location); // f  2 different locations in memory
console.log(person1.location === person3.location); //f person 2 and 3 point to the same object - mutable because person 3 created as a copy and tehy point to the same object
console.log(person2.location === person3.location);  //true  compare locations not objects pointing to same location
//comparing value and type like location property 

//proprty in object will return true but when compare whole object always false unless copierd