// dom elements 
const input = document.querySelector("[name='email']"),
	  errorMsg = document.querySelector('.error'),
	  errorIcon = document.querySelector('.error-icon');


document.forms[0].onsubmit = function(event) {
	
	let valid = false;

	if(input.value !== "" && input.value.includes('@') === true) {
		valid = true;
	}

	if(valid) {
		errorIcon.classList.remove('active');
		errorIcon.classList.remove('active');
	} else {
		event.preventDefault();
		errorIcon.classList.add('active');
		errorMsg.classList.add('active');
	}
	console.log(valid);
}

console.log(input.value.includes('@'))
