<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Loads Composer dependencies

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"] ?? '');
    $email = htmlspecialchars($_POST["email"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    if (!$name || !$email || !$message) {
        http_response_code(400);
        echo "Please fill out all fields.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Example: Gmail SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'askie.dev@gmail.com'; // Replace with your email
        $mail->Password = 'bhic fhxc ywba zfes';
        $mail->SMTPSecure = 'tls'; // Or 'ssl'
        $mail->Port = 587; // Or 465 if using 'ssl'

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('askie.dev@gmail.com'); // Your own email again

        // Content
        $mail->Subject = 'New message from portfolio';
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo 'Message sent successfully';
    } catch (Exception $e) {
        http_response_code(500);
        echo 'Message could not be sent. Error: ', $mail->ErrorInfo;
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
