// console.log('Loop 1');
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log('Loop 2');
// for(let i = 0; i <= 12; i += 2){
//     console.log(i);
// }

// let j = 0; 
// while(j < 4) {
//     console.log(j);
//     j++;
// }
// let x = 100
// do {
//     console.log(x);
// } while(x < 3);










function moreHashtags(num) {
    let hash = '#';

    for(i = 0; i < num; i++) {
        console.log(hash);
        
        // Append the contents of 'hash' to the end of the document element.
        document.getElementById("hash").innerHTML += hash + "<br\>";

        // Increase the number of #'s in the 'hash' variable.
        hash += '#';
    }
}

let num = Number(prompt('Give a number!'));

// Num should be greater than 0. Otherwise what's the point?
if(num > 0) moreHashtags(num);