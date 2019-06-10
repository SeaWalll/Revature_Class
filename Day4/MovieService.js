function display(data) {
    document.getElementById("movieTable").removeChild(document.getElementById("tblbody"));
    let tblbody = document.createElement("tbody");
    tblbody.id = "tblbody";
    document.getElementById("movieTable").append(tblbody);

    let dataObj = JSON.parse(data.responseText);
    for (key in dataObj) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        tr.className = "row";
        td1.className = "col";
        td2.className = "col";
        td1.innerHTML = key;
        if (dataObj[key].toString().indexOf('[object Object]') !== -1) {
            for (key2 in dataObj[key]) {
                td2.innerHTML += dataObj[key][key2].Source + ": "
                    + dataObj[key][key2].Value + "<br>";
            }
        }
        else {
            td2.innerHTML = dataObj[key];
        }
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById("tblbody").append(tr);
    }
}
function loadMovieData(movieName) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            display(this);
        }
    }
    xhr.open("GET", "http://www.omdbapi.com/?t=" + movieName + "&&apikey=5aeb86c3", true);
    xhr.send();
}