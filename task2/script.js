
var selectedEmailsDiv = document.getElementById("selectedEmails");


var checkboxes = document.querySelectorAll('input[type="checkbox"]');


checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        var email = checkbox.value;


        if (checkbox.checked) {
            var emailElement = document.createElement("p");
            emailElement.textContent = email;
            selectedEmailsDiv.appendChild(emailElement);
        } else {

            var emailElements = selectedEmailsDiv.getElementsByTagName("p");
            for (var i = 0; i < emailElements.length; i++) {
                if (emailElements[i].textContent === email) {
                    selectedEmailsDiv.removeChild(emailElements[i]);
                    break;
                }
            }
        }
    });
});
