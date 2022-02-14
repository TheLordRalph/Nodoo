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
/*
$getdestinos = "select * from empresa where 1";
$result = mysqli_query($conn, $getdestinos)
	or die ("Insert Error");

while($row = mysqli_fetch_array($result)) {
	echo $row['nombre'];
}*/
else{
	
//Recoger valores 
$cod_clieProv = $_GET["cod_clieProv"];
$nombre_clieProv = $_GET["nombre_clieProv"];
$cif_clieProv = $_GET["cif_clieProv"];
$respuesta=array();

if($cod_clieProv){
	$getdestinos = "select * from cliente_proveedor where id_cli_prov=" . $cod_clieProv;
	$result = mysqli_query($conn, $getdestinos)
		or die ("Insert Error");
	
	while($row = mysqli_fetch_array($result)) {
		array_push($respuesta,[$row['id_cli_prov'],$row['nombre']]);
		
	}
}else if($nombre_clieProv){
	$getdestinos = "select * from cliente_proveedor where nombre LIKE %".$nombre_clieProv."%";
	$result = mysqli_query($conn, $getdestinos)
		or die ("Insert Error");
	
	while($row = mysqli_fetch_array($result)) {
		array_push($respuesta,[$row['id_cli_prov'],$row['nombre']]);
	}
}else if($cif_clieProv){
	$getdestinos = "select * from cliente_proveedor where dni_nif LIKE %".$cif_clieProv."%";
	$result = mysqli_query($conn, $getdestinos)
		or die ("Insert Error");
	
	while($row = mysqli_fetch_array($result)) {
		array_push($respuesta,[$row['id_cli_prov'],$row['nombre']]);
	}
}else{
	$getdestinos = "select * from cliente_proveedor";
	$result = mysqli_query($conn, $getdestinos)
		or die ("Insert Error");
	
	while($row = mysqli_fetch_array($result)) {
		array_push($respuesta,[$row['id_cli_prov'],$row['nombre']]);
}
}

$myJSON = json_encode($respuesta);

echo $myJSON;
echo $row;

}

?>