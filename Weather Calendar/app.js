function helloWorld() {
    document.querySelector("body").innerHTML = "<h1>Hello World!</h1>";
}

loadWeatherData();
console.log(localStorage.getItem("weatherData"));

