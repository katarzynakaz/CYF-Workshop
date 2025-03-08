// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
    "name": "Manu",
    "favourite_ice_cream": "vanilla",
    "favourite_topping": "marshmallows",
};

function assertFieldEquals(object, field, targetValue) {
    console.assert(object.field === targetValue);
}
//wrong object[field] === targetValue   field is used as a variable 
// object.field is  aproperty dthat does not exist so use object[field]  to access object
// either . or backet notataion
assertFieldEquals(person, "favourite_ice_cream", "vanilla");
