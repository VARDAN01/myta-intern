function signup()
{
	window.localStorage['username'] = document.getElementById('signup_username').value;
	window.localStorage['password'] = document.getElementById('signup_password').value;
	$('#signup').modal('hide');
	console.log("signup");
}

function login() {
	var username = document.getElementById('login_username').value;
	var password = document.getElementById('login_password').value;
	console.log(window.localStorage['username']);
	if((username === window.localStorage['username']) && (password === window.localStorage['password']))
	{
		window.localStorage['login'] = 1;
		$('#signin').modal('hide');
		console.log("login");
	}
	else
	{
		alert("Wrong username/password");
	}
	codeAddress();
	

	// body...
}



function function_name(argument) {
	// body...
}