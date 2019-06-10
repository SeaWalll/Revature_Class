var num = 300; // Global Scope
console.log('Global Scope: num = ' + num);

// Variable declaration inside a function 
// is in the scope of the function.
function hello() {
    var num2 = 100; 
    if(num2 > 0) {
        var isValid = true; // function scope
        let result = "valid"; // local scope
    }
    console.log("Function Scope- num2 : " ,num2);
    console.log("Function Scope- valid : ", isValid);
    // console.log("Local Scope- result : ", result); // Out of scope
}

hello();

let glob = 2;
var va = 4;
function sscope() {
    let glob2 = 3;
    var va2 = 5;
    if (glob == 2) console.log("Glob Seen");
    if (va == 4) console.log("Va Seen");
    if (glob2 == 3) console.log("Glob2 Seen");
    if (va2 == 5) console.log("Va2 Seen");
    // All seen
}

sscope();
// Seen
if (glob == 2) console.log("Glob Seen2");
if (va == 4) console.log("Va Seen2");

// Not seen
if (glob2 == 3) console.log("Glob2 Seen2");
if (va2 == 5) console.log("Va2 Seen2");




