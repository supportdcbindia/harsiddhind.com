<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    
    // Set up the email
    $to = "uidesign.delta@gmail.com"; // Change this to your email address
    $subject = "New quote request";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email";
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
