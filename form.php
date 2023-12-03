<?php
    if (isset($_POST['submit'])) {
        $head  = 'MIME-Version: 1.0' . "\r\n";
        $head .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $head .= 'From: contact@jeremiebayon.fr' . "\r\n";
        $head .= 'Reply-to: ' . $_POST['email'];

        $message = '<h1>Envoyé depuis jeremiebayon.fr</h1>
        <p><b>Nom : </b>' . $_POST['last_name'] . '<br>
        <p><b>Prénom : </b>' . $_POST['first_name'] . '<br>
        <p><b>Email : </b>' . $_POST['email'] . '<br>
        <b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

        $return = mail('bj.06202000@gmail.com', 'Envoi depuis jeremiebayon.fr', $message, $head);
        if($return) {
            $_SESSION['status'] = "Votre message a été envoyé.";
        }
        else {
            $_SESSION['status'] = "Une erreur est survenue lors de l'envoi de votre message.<br>Veuillez recommencer";
        }
        header("Location : index.php");
    }
?>