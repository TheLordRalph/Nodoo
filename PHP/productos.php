<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "nodoo";

$respuesta=array();

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$getdestinos = "select * from producto";
$result = mysqli_query($conn, $getdestinos)
	or die ("Insert Error");

while($row = mysqli_fetch_array($result)) {
	array_push($respuesta,[$row[0],$row[2],$row[1],$row[5],$row[6],$row[4],$row[7]]);
}

$myJSON = json_encode($respuesta);
echo $myJSON;
?>