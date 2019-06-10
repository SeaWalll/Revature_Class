var currentDate = new Date();

// logic

// Method 1
// var month;
// if ((currentDate.getMonth() + 1) < 10) month = "0" + (currentDate.getMonth() + 1);
// else month = (currentDate.getMonth() + 1);

// var day;
// if (currentDate.getDate() < 10) day = "0" + currentDate.getDate();
// else day = currentDate.getDate();

// var currentDateStr = currentDate.getFullYear() + "-" 
//     + month + "-" 
//     + day; 

// Method 2
var month = ((currentDate.getMonth() + 1) < 10) ? 
    "0" + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);

var day = currentDate.getDate() < 10 ? 
    "0" + currentDate.getDate() : currentDate.getDate();

var currentDateStr = currentDate.getFullYear() + "-" 
    + month + "-" 
    + day; 

document.getElementById("date").setAttribute("min", currentDateStr);

// Expected Output 
// var currentDateStr = "2019-06-04"; // static date
console.log("CurrentDate: " + currentDateStr);