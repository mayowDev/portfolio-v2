<? php

    if(isset($_POST['email']), && $_POST['email']  != ''){
        if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            // Submit the form 
            $name= $_POST['name'];
            $email= $_POST['email'];
            $subject= $_POST['subject'];
            $message= $_POST['message'];
        
            $to = "dinnod4@gmail.com";
            $body= "";
        
            $body .= "From: ".$name. "\r\n";
            $body .= "Email: ".$email. "\r\n";
            $body .= "Message: ".$message. "\r\n";
        
            mail($to, $subject, $body);

        }
    }

?>