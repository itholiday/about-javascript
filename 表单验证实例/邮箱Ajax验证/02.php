<?php
	$email = $_GET['e'];
	// $email = 'aaa@itholiday.com';
	if($email != 'itholiday@126.com'){
		echo true;
	}else{
		echo false;
	}