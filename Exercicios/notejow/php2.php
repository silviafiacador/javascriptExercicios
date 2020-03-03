<?php 
include("conectar.php");

$nome=$_POST['nome'];
$email=$_POST['email'];
$senha=$_POST['senha'];
 
  $sql="INSERT INTO usuario (nome,email,senha) VALUES('$nome','$email','$senha')";
	mysqli_query($conn,$sql);
?>