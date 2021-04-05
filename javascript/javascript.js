function validate()
{
	if (validateFirstName() == false)
		return false;

	if (validateFirstName() == false)
		return false;

	if (validateLastName() == false)
		return false;

	if (validateAddress() == false)
		return false;

	if (validateCity() == false)
		return false;

	if (validateZip() == false)
		return false;

	if (validatePhone() == false)
		return false;

	if (validateEmail() == false)
		return false;
}

function validateFirstName()
{
	var x = document.forms["loginForm"]["FirstName"].value;
	if (x.length <= 1)
	{
		alert("First name must be longer than 1 character")
		return false;
	}
}

function validateLastName()
{
	var x = document.forms["loginForm"]["LastName"].value;
	if (x.length <= 1)
	{
		alert("Last name must be longer than 1 character")
		return false;
	}
}

function validateAddress()
{
	var x = document.forms["loginForm"]["Address"].value;
	if (x.length <= 1)
	{
		alert("Address must be longer than 1 character")
		return false;
	}
}

function validateCity()
{
	var x = document.forms["loginForm"]["City"].value;
	if (x.length <= 1)
	{
		alert("City must be longer than 1 character")
		return false;
	}
}

function validateZip()
{
	var x = document.forms["loginForm"]["Zip"].value;
	if (x.length != 5)
	{
		alert("Zip code must be 5 digits long");
		return false;
	}
	if (isNaN(x))
	{
		alert("Zip code must be only numbers");
		return false;
	}
}

function validatePhone()
{
	var x = document.forms["loginForm"]["Phone"].value;
	if (x.length != 10)
	{
		alert("Phone number must be 10 digits long");
		return false;
	}
	if (isNaN(x))
	{
		alert("Phone number must be only numbers");
		return false;
	}
}

function validateEmail() 
{
	var x = document.forms["loginForm"]["Email"].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(x) == false)
    {
    	alert("Invalid email address");
    	return false;
    }
}