<?php
// Database connection details
$dbhost= "localhost";
$dbuser= "root";
$password = "";
$dbname = "business_record_system";

// Create connection
if(!$con =  mysqli_connect($dbhost,$dbuser,$password,$dbname)){
    die("failed to connect!!!");
}

