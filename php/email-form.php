<?php
require_once __DIR__.'\..\config.php';

include(__DIR__.'\..\vendor\PHPMailer\mail-config.php');

require __DIR__.'\..\vendor\PHPMailer\mail-config.php';

$name = $_POST['nombre'];
$email_address = $_POST['email'];
$subject = $_POST['asunto'];
$message = $_POST['mensaje'];

$check_name = false;
$check_email = false;
$check_subject = false;
$check_message = false;

$receiver = 'alejandroarcmartinez@outlook.com';

function filter_email_header($form_field) {
    return preg_replace('/[nr|!<>^$%*&]+/', '', $form_field);
}

$email_address = filter_email_header($email_address);

function check_field($form_field) {
    if(empty($form_field)) {
        return false;
    }

    return true;
}

$check_name = check_field($name);
$check_email = check_field($email_address);
$check_subject = check_field($subject);
$check_message = check_field($message);

$form_check = $check_name && $check_email && $check_subject && $check_message;

if($form_check) {
    
    $mail->setFrom($email_address, 'Mailtrap Website');
    $mail->addAddress('alejandroarcmartinez@outlook.com', 'Yo');
    $mail->Subject = $subject;

    $mail->isHTML(false);
    $mail->Body = $message;

    if($mail->send()) {
        echo '
            enviado
        ';
    } else {
        echo '
            no enviado
        ';
    }
}

?>