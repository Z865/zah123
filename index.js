// Retrieve the popup element
let popup = document.getElementById("popup");

// Function to open the popup after form validation
function openPopup() {
    // Validate the form
    var form = document.getElementById("myForm");
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required")) {
            if (inputs[i].value == "") {
                alert("Please fill all required fields");
                return false; // Prevent form submission
            }
        }
    }
    // If form is valid, add the "open-popup" class to display the popup
    popup.classList.add("open-popup");
    return false;
}

// Function to close the popup
function closePopup() {
    popup.classList.remove("open-popup");
}
