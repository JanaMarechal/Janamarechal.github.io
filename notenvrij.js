// Function to update menu items based on the notenvrij checkbox state
function updateMenu_noten() {
    var notenvrijCheckbox = document.getElementById('notenvrij');
    var voorgerechtItems = document.querySelectorAll('.voorgerecht span.noten');
    var hoofdgerechtItems = document.querySelectorAll('.hoofdgerecht span.noten');
    var nagerechtItems = document.querySelectorAll('.nagerecht span.noten');

    // Check if the notenvrij checkbox is checked
    if (notenvrijCheckbox.checked) {
        // Update voorgerecht items
        voorgerechtItems[0].innerHTML = "pesto";
        voorgerechtItems[1].innerHTML = "vanille crème";

        // Update hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "maiskorst";

        // Update nagerecht items
        nagerechtItems[0].innerHTML = "karamel";
        nagerechtItems[1].innerHTML = "vanille";
    } else {
        // Revert back to original text in voorgerecht items
        voorgerechtItems[0].innerHTML = "walnoten pesto";
        voorgerechtItems[1].innerHTML = "amandel crème";

        // Revert back to original text in hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "amandelkorst";

        // Revert back to original text in nagerecht items
        nagerechtItems[0].innerHTML = "amaretto karamel";
        nagerechtItems[1].innerHTML = "walnoten";
    }

}

// Add event listener to the notenvrij checkbox to call updateMenu_noten_noten_noten function when clicked
document.getElementById('notenvrij').addEventListener('click', updateMenu_noten);
