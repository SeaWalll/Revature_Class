function loadUserData() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            localStorage.setItem("jsonString", JSON.stringify(this.responseText));
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
}

function validate(dataObj) {
    
    for (key in dataObj) {
        // The entries in this API lack a 'password' field, so the 'name'
        // field is being used as a substitute.
        let email = dataObj[key].email;
        let password = dataObj[key].name;

        if (document.getElementById("username").value == email
            && document.getElementById("password").value == password) {
            return true;
        }
    }
    return false;
}

function getUserJSON() {
    let jsonString = localStorage.getItem("jsonString");

    // JSON.stringify() has made this JSON object too stringy.
    // To counteract this, JSON.parse() is called twice on 
    // the same string object.
    let json = JSON.parse( JSON.parse(jsonString) );

    return json;
}