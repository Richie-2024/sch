
<?php
session_start();
include("function.php");
include("connection.php");
if($_SERVER['REQUEST_METHOD'] =="POST" ){
$username =$_SERVER['$username'];
$email =$_SERVER['$email'];
$password=$_SERVER['$password'];
if(!empty($username) && !empty($email)&& !empty($password)&& ! is_numeric($username)){
  $query = "select * from users where username = '$username'limit 1";
  mysqli_query($con,$query);
}else
echo "you have entered invalid password or username";
if($result){
  if($result && mysqli_num_row($result) >0){
    $user_data=mysqli_fetch_assoc($result);
    if($user_data['$password'] ===$password){
      $_SESSION['user_id'] = $user_data['$user_id'];
      header("Location:index.php");
      die;
    }
  }
}
header("Location:login.php");
die;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business Record Management System - Login</title>
  <style>
    /* General styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  text-align: center;
  padding: 40px;
  box-sizing: border-box;
}

.container .brms-title {
  font-size: 24px;
  color: #007bff;
  margin-bottom: 40px;
}

.form-container {
  display: none;
}

.form-container.active {
  display: block;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"] {
  width: calc(100% - 20px);
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}

p.message {
  margin-top: 20px;
  font-size: 14px;
}

p.message a {
  color: #007bff;
  text-decoration: none;
}

p.message a:hover {
  text-decoration: underline;
}

  </style>
</head>
<body>
  <div class="container">
    <h1 class="brms-title">Business Record Management System</h1>
    <div class="form-container sign-in-container active">
      <form id="login-form" method="POST">
        <h2>Login</h2>
        <input type="email" id="login-email" placeholder="Email" required />
        <input type="password" id="login-password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p class="message">Don't have an account? <a href="Signup.php" id="">Sign Up</a></p>
      </form>
    </div>
     <div class="form-container sign-up-container">
      <form id="signup-form">
        <h2>Create Account</h2>
        <input type="text" id="signup-username" placeholder="Username" required />
        <input type="email" id="signup-email" placeholder="Email" required />
        <input type="password" id="signup-password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p class="message">Already have an account? <a href="Signup.php" id="">Login</a></p>
      </form>
    </div>
  </div> 
  <script src="scripts.js"></script> 
</body>
</html>
