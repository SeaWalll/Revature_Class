function login() {
    let valid;

    loadUserData();

    let json = getUserJSON();

    if (json === undefined ) {
        valid = false;
        console.log("json undefined");
    }
    else {
        valid = validate(json);
    }

    if (valid) {
        document.querySelector("body").removeChild(document.getElementById("loginCred"));
        document.getElementById("searchTag").style.visibility = "visible";
    }
    else {
        document.getElementById("invalid").innerHTML = "Invalid username/password";
    }
    localStorage.clear();
}

function search() {
    
    
    let movieName = document.getElementById("searchBox").value;

    loadMovieData(movieName);

    document.getElementById("errorTag").style.visibility = "hidden";
    document.getElementById("table").style.visibility = "visible";

    // let movieData = JSON.parse(localStorage.getItem("movieJSON") );
    // console.log(movieData);
    // display();
    // console.log(movieData);
    // if(movieData.Response == null) {
    //     document.getElementById("errorTag").style.visibility = "visible";
    // }
    // else {

    // } 
}
// function radioCheck() {
//     let poke = document.getElementById("pokéRadio");
//     let movi = document.getElementById("movieRadio");


// }