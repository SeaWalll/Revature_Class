let num = prompt('Pick a number');
console.log(num);

let num1 = Number(prompt('Pick a number'));
console.log(num1);
if( Number.isNaN(num1)) {
    console.log('Invalid number');
}
else {
    console.log('Valid number');
}