function hello() {
    console.log('Hello');
}

hello();

function add(a,b) {
    var c = a+b; // business logic
    console.log(c);
}

add(3,5);

// We can store a function in a variable
var addFn = function(a,b) {
    var c = a+b;
    console.log(c);
}

addFn(4,6);

function sub(a, b) {
    return a - b;
}
console.log( "Sub 2 from 3: ", sub(3,2) );

let mult = function(a, b) {
    var c = a * b;
    return c;
}
console.log("Multiply 4 and 3: ", mult(3, 4));


// let a = 3;
// a = 4;
// console.log("a is ", a);

// Calculates the sum of all even fibonnaci numbers up to 'max'.
function evenFib(max) {
    let evenSum = 0;
    let curFib = 2
    let prevFib = 1;
    let holds = 2;
    while( curFib < max ) {
        if( curFib%2 == 0 ) {
            evenSum += curFib;
        }
        holds = curFib;
        curFib += prevFib;
        prevFib = holds;
    }
    return evenSum;
}

let max = 4000000;
// console.log("Sum of all even fibs up to ", max, ": ", evenFib(max));

// Doesn't work
function largePalinFromDigits(digits) {
    let largestPalindrome = 0;
    let floor = 10 ** (digits - 1);
    let ceiling = 10 ** (digits) - 1;
    // Checking the bigger numbers first.
    for (i = ceiling; i >= floor; i--) {
        for(j = ceiling; j >= floor; j--) {
            let prod = i * j;
            if( checkIfPalin(prod) && (prod) > largestPalindrome ) {
                largestPalindrome = i*j; 
            }
        }
    }
    return largestPalindrome;
}
function checkIfPalin(num) {
    let line = num.toString();
    // console.log(line.length);
    for(i = 0; i < line.length/2; i++) {
        if( line.charAt(i) != line.charAt(line.length - 1 - i) ) {
            return false;
        }
    }
    return true;
}

// console.log("Is palindrome: ", checkIfPalin(98));

// console.log( 10 ** 2 );

let digits = 2;
console.log("Largest palindrome from ", digits, " digits: ", largePalinFromDigits(digits));



