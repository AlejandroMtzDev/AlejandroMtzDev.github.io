<?php
require_once SITE_ROOT.'\config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once  __DIR__.'\src\Exception.php';
require_once __DIR__.'\src\PHPMailer.php';
require_once __DIR__.'\src\SMTP.php';

$mail = new PHPMailer(true);

//Credenciales SMTP
$mail->isSMTP();
$mail->Host = 'smtp.mailtrap.io';
$mail->SMTPAuth = true;
$mail->Username = '7e04cee1094a74';
$mail->Password = '5d166b55d82077';
$mail->SMTPSecure = 'tls';
$mail->Port = 2525;
?>