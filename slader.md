LINKS UTILIZADOS
****************
1. VIDEO AYUDA SLADER =>  https://www.youtube.com/watch?v=WI0aCIEYXvw
2. VIDEO AYUDA ENVIAR FORMULARIO => https://www.youtube.com/watch?v=aUeAp5WG6Rg
3. https://www.youtube.com/watch?v=fHSkaccKfaA





 
# CODIGO DE ENVIO PARA EL FORMULARIO PHP
<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$empresa = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'ignaciobluuweb@gmail.com';
$asunto = 'Mensaje de mi sitio web';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>