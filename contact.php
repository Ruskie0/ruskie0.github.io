<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Loads Composer dependencies

header('Content-Type: application/json');

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
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'askie.dev@gmail.com'; // Your email
        $mail->Password = 'bhic fhxc ywba zfes'; // App password
        $mail->SMTPSecure = 'tls'; // Use 'ssl' if using port 465
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('askie.dev@gmail.com');

        // Content
        $mail->Subject = 'New message from portfolio';
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        $mail->send();

        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Message sent successfully!"
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Message could not be sent. Mailer Error: " . $mail->ErrorInfo
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method Not Allowed"
    ]);
}
