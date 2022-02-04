<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "nodoo";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$getdestinos = "select * from empresa where 1";
$result = mysqli_query($conn, $getdestinos)
	or die ("Insert Error");

while($row = mysqli_fetch_array($result)) {
	echo $row['nombre'];
}
?>