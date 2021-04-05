// Driver function that is called by the form being submitted
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

// Validates first name
function validateFirstName()
{
	var x = document.forms["loginForm"]["FirstName"].value;
	if (x.length <= 1)
	{
		alert("First name must be longer than 1 character")
		return false;
	}
}

// Validates last name
function validateLastName()
{
	var x = document.forms["loginForm"]["LastName"].value;
	if (x.length <= 1)
	{
		alert("Last name must be longer than 1 character")
		return false;
	}
}

// Validates address
function validateAddress()
{
	var x = document.forms["loginForm"]["Address"].value;
	if (x.length <= 1)
	{
		alert("Address must be longer than 1 character")
		return false;
	}
}

// Validates city
function validateCity()
{
	var x = document.forms["loginForm"]["City"].value;
	if (x.length <= 1)
	{
		alert("City must be longer than 1 character")
		return false;
	}
}

// Validates zip code
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

// Validates phone number
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

// Validates email
function validateEmail() 
{
	var x = document.forms["loginForm"]["Email"].value;

	// Full disclosure: I found this regular expression online that's useful for validating emails. 
	// I've used this same regular expression in the past for email validation so I figured it would work here as well.
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regEx.test(x) == false)
    {
    	alert("Invalid email address");
    	return false;
    }
}