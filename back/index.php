<?Php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  $NombreCliente     = $_POST['NombreCliente'];
  $NIT 				 = $_POST['NIT'];
  $NombreDelPunto    = $_POST['NombreDelPunto'];
  $NombreDelEquipo   = $_POST['NombreDelEquipo'];
  $Ciudad            = $_POST['Ciudad'];
  $Promotor          = $_POST['Promotor'];
  $RTC               = $_POST['RTC'];
  $Capitan           = $_POST['Capitan'];

  $mysqli = new mysqli("localhost", "root", "", "database");
  if ($mysqli->connect_errno) {
	die("error de conexión: " . $mysqli->connect_error);
  }

  $sql = "INSERT INTO prueba (NombreCliente,NIT,NombreDelPunto,NombreDelEquipo,Ciudad,Promotor,RTC,Capitan) VALUES ('$NombreCliente','$NIT','$NombreDelPunto','$NombreDelEquipo','$Ciudad','$Promotor','$RTC','$Capitan')";
  $mysqli->query($sql);
?>