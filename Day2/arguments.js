
function minus(a,b=0) {
    return a - b;
}

function add(a,b) {
    if( b === undefined ) return a;
    return a + b;
}
console.log("minus");
console.log( minus(10, 4) );
console.log( minus(10) ); // Undefined unless default value is provided.

console.log("add");
console.log(add(5, 2));
console.log(add(5)); // Undefined unless default value is provided.
console.log(add(5,2,4,8)); // Ignores extra parameters






