
<?php
$nombre = $_POST['nombre'];
$tel = $_POST['tel'];
$correo = $_POST['correo'];
$msj = $_POST['msj'];

$header = "From: " . $correo . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$msj = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$msj .= "Su e-mail es: " . $correo . " \r\n";
$msj .= "Teléfono de contacto: " . $tel . " \r\n";
$msj .= "Mensaje: " . $_POST['msj'] . " \r\n";
$msj .= "Enviado el: " . date('d/m/Y', time());

$para = 'leonenazareno@gmail.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_decode($msj), $header);

header("Location:https://nazarenoleone.000webhostapp.com/msj-enviado.html");
// header("Location:index.html");
?>