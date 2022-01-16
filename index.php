<?php 
        $servername= "localhost";
        $username= "root";
        $password= "";
        $database_name= "rupesh";

        $conn=mysqli_connect($servername,$username,$password,$database_name);
        if(!$conn){
            die("connection failed: " . mysqli_connect_error());
        }
            echo "connected succesfully";
        
        if(isset($_POST['save'])){
            $user_name=$_POST['fullname'];
            $email_id=$_POST['email'];
            $password=$_POST['password'];

            $sql_query = "INSERT INTO signup_table (fullname,email,password)
            VALUES ('$user_name','$email_id','$password')";

            if(mysqli_query($conn, $sql_query)){
                echo "Entry inserted succesfully";
            }
            else{
                echo "error:" . $sql . "" . mysql_error($conn);
            }
            mysqli_close($conn);
        }

           
?>