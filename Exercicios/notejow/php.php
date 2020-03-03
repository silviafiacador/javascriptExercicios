<?php 
header('content-type:text/html,charset=utf-8');

$usuario=$_POST['usuario']
$senha=$_POST['senha']

include "conectar.php"

$sql = "SELECT login WHERE usuario='$UsuarioLogin' && senha='SenhaLogin'";

$resposta = mysqli_query($conn, $sql);
if ($campo=mysqli_fetch_array($resposta)) {echo "vc logou com sucesso";}
else {"falha no login"}
?>