function isEmpty() {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('e-mail').value;
    if (name == "" || email == "") {
        return true;
    } else return false;
}

function switchVisibility() {
    var sendButton = document.getElementById('send');
    var check = isEmpty();
    if (check) {
        sendButton.setAttribute("disabled", "true");
    } else 
        sendButton.removeAttribute("disabled");      
}

function showError(id) {
    document.getElementById(id).style.display = 'block';
}

function validateName() {
	var name = document.getElementById('fname').value;
	var correctName = /^([A-Z]{1}[a-z]{1,31}\s*)+$/;
	if(correctName.test(name)){
		return true;
	} else
		showError('fname-error');
	return false;
}

function validateEmail() {
	var email = document.getElementById('e-mail').value;
	var correctEmail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
	
	if(correctEmail.test(email)){
		return true;
	} else showError('email-error');
	return false;
}

function validateMessage() {
	var message = document.getElementById('message').value;
	var correctMessage = /^\w+/
	if(correctMessage.test(message)){
		return true;
	} else showError('message-error');
	return false;
}

function validation() {
    if (validateName() && validateEmail() && validateMessage()) {
        return true;
    } else
        return false;

}