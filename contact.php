<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header("Content-Type: application/json"); // Tell JS this is JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"] ?? '');
    $email = htmlspecialchars($_POST["email"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    if (!$name || !$email || !$message) {
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Please fill out all fields."
        ]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'askie.dev@gmail.com';
        $mail->Password = 'bhic fhxc ywba zfes'; // Use app password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('askie.dev@gmail.com');

        $mail->Subject = 'New message from portfolio';
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Thank you for your message! I’ll get back to you as soon as possible."
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method Not Allowed"
    ]);
}
