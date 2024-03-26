function validateForm() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

// Validation of Phone number using regular expression
var phoneRegex = /^[0-9]{10}$/;
if (!phoneRegex.test(number)) {
alert("Please enter a valid mobile number");
isValid = false;
  highlightField("number"); // Highlight the phone field
} else {
isValid = true;
};
if (isValid) {
  // Validation of Email address using regular expression
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    isValid = false;
    highlightField("email"); // Highlight the email field
} else {
isValid = true
    };
};

  //highlighting error field when required value is false
function highlightField(fieldId) {
var field = document.getElementById(fieldId);
field.style.backgroundColor = 'lightgrey';
}
// Prevent form submission if validation checks fail.
if (name == "" || number == "" || email == "" || message == "") {
alert("All fields must be filled out");
return false;
}
    // When the form is being submitted successfully, this message will pop up.
var thankYouMessage = "Form Submitted Successfully!";
alert(thankYouMessage);
return true; // Allow the form to be submitted successfully.
}