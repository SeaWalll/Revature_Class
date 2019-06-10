// function helloWeather() {
//     document.querySelector("body").innerHTML += "<br/><h2>Hello Weather!</h2>";
// }

// load weather into memory
// query weather
// display weather
// 



function display(data) {
    let dataObj = JSON.parse(data.responseText);
    for (key in dataObj) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        
        td1.innerHTML = key;
        // if (dataObj[key].toString().indexOf('[object Object]') !== -1) {
        //     for (key2 in dataObj[key]) {
        //         td2.innerHTML += dataObj[key][key2].Source + ": "
        //             + dataObj[key][key2].Value + "<br>";
        //     }
        // }
        // else {
        //     td2.innerHTML = dataObj[key];
        // }
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        document.getElementById("tblbody").append(tr);
    }
}
function loadWeatherData() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            localStorage.setItem("weatherData", JSON.stringify(this.responseText));
        }
    }
    xhr.open("GET", "https://listening.api.npr.org", true);

    // xhr.setRequestHeader("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com");
    // xhr.setRequestHeader("X-RapidAPI-Key", "5a4a27ec13mshac9ae70df50c4d6p15b7bcjsnca362c15496e");
    // unirest.get("https://community-open-weather-map.p.rapidapi.com/forecast?q=arlington%2Cusa")
    // .header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
    // .header("X-RapidAPI-Key", "5a4a27ec13mshac9ae70df50c4d6p15b7bcjsnca362c15496e")
    // .end(function (result) {
    //     console.log(result.status, result.headers, result.body);
    // });


    xhr.send();
}






