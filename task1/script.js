function showSelectedItems() {
    var result = "";
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    for (var i = 0; i < checkboxes.length; i++) {
        result += checkboxes[i].value;
        if (i < checkboxes.length - 1) {
            result += ", ";
        }
    }

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Ви вибрали: " + result;
}
