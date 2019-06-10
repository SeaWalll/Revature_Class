// let cars = [
//     'Saab', 
//     'Volvo', 
//     'BMW'
// ];
// console.log(cars);

// let dogs = new Array('Dalmation', 'Husky', 'German Shephard');
// console.log(dogs);

// console.log(dogs[0]);

// // Array
// let person1 = new Array("Jane", "Doe", 48);
// console.log(person1);

// // Object
// let person2 = {firstName: "John", lastName: "Smith", age: 48};
// console.log(person2);


// let person3 = new Array(
//     "Amy",
//     {
//         firstMiddleName: "mother",
//         secondMiddleName: "fking"
//     },
//     "Schumer"
// );
// console.log(person3);


// His stuff starts here
let arr = [2, "Wes", null, {}, function(){}];

let states = ["Washington", "Texas", "Virginia", "Utah"];

for(var i in states) {
    var stateName = states[i];
    console.log(stateName);
}

console.log("Accessing arrays by index: ");
console.log(states[0]);

// Find number of elements in an array
console.log("Size: " + states.length);

// Add an element to an array
console.log("Push");
states.push("New Mexico");
console.log(states);

// Removes an element from the end of an array
console.log("Pop");
states.pop();
console.log(states);


// Pop also returns the removed element.
// console.log(states.pop());

// Removes the element from the start position of an array
states.shift();
console.log(states);


// Append element to the front of an array
states.unshift("New Mexico");
console.log(states);


console.log(states.join(','));
console.log(states.slice(1,3));

console.log(states.slice(3, 4));
console.log(states.slice(0, 1));
console.log(states.slice(0, 4));
console.log(states.slice(0, 10)); // No difference observed



// Search for an item in an array
let input = prompt("Enter state name");
// Implement the logic of whether the given state name is available in the array.
// If it matches, State name is available,
// else State not found.

function searchState(input) {
    if( states.indexOf(input) !== -1 ) console.log("State name is available")
    else console.log("State name is NOT available")
}

searchState(input);

let ary = new Array(2, 2, 4, "Hey", true, "Hey", 4, 4);
function parseUniqueValues() {
    let aary = new Array();
    for(let i = 0; i < ary.length; i++) {
        if( aary.indexOf(ary[i]) === -1 ) aary.push(ary[i]);
    }
    return aary;
}

let aaaa = parseUniqueValues();
console.log("Unique values: " + aaaa);







