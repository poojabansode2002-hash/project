	//Validtion Code For Inputs

var Username= document.forms['form']['User name'];
var Aadharcardnumber = document.forms['form']['Aadhar card number'];

var Username_error = document.getElementById('User name_error');
var Aadharcardnumber_error = document.getElementById('Aadhar card_error');

email.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', Aadharcard_Verify);

function validated(){
	if (Username_error.value.length < 9) {
		Username_error.style.border = "1px solid red";
		Username_error.style.display = "block";
		Username_error.focus();
		return false;
	}
	if (Aadharcardnumber_error.value.length < 6) {
		Aadharcardnumber.style.border = "1px solid red";
		Aadharcardnumber_error.style.display = "block";
		Aadharcardnum.focus();
		return false;
	}

}
function Username_Verify(){
	if (Username_error.value.length >= 8) {
		Username_error.style.border = "1px solid silver";
		Username_error.style.display = "none";
		return true;
	}
}
function Aadharcardnumber_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

