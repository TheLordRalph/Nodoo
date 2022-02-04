window.onload = function() {
    var nombreEmpresa;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            nombreEmpresa = this.responseText;
            document.getElementById("nombreEmpresa").innerHTML = nombreEmpresa;
        }
    };
    xhttp.open("GET", "./PHP/select.php", true);
    xhttp.send();
}