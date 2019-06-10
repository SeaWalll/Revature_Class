var marks = 80;

var grade; 
if (marks > 90 && marks <= 100) {
    grade = "A";
}
else if (marks >= 60 && marks < 90) {
    grade = "B";
}
else if (marks >= 50 && marks < 60) {
    grade = "C";
}
else {
    grade = "F";
}

console.log("Input Marks: " + marks + " , calculated grade: " + grade);