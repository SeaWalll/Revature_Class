var currentDate = new Date();
console.log(currentDate);

var day = currentDate.getDay();
console.log('Day: ' + day);

var year = currentDate.getFullYear();
console.log('Year: ' + year);

var month = currentDate.getMonth();
console.log('Month: ' + month);

switch(day){
    case 0:
        console.log('Sunday'); break;
    case 1:
        console.log('Monday'); break;
    case 2:
        console.log('Tuesday'); break;
    case 3:
        console.log('Wednesday'); break;
    case 4:
        console.log('Thursday'); break;
    case 5:
        console.log('Friday'); break;
    case 6:
        console.log('Satarday'); break;
}