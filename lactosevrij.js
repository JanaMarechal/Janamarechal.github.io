// Function to update menu items based on the lactosevrij checkbox state
function updateMenu_lactose() {
    var lactosevrijCheckbox = document.getElementById('lactosevrij');
    var extraItems = document.querySelectorAll('.extra span.lactose');
    var hoofdgerechtItems = document.querySelectorAll('.hoofdgerecht span.lactose');
    var nagerechtItems = document.querySelectorAll('.nagerecht span.lactose');

    // Check if the lactosevrij checkbox is checked
    if (lactosevrijCheckbox.checked) {

        // Update hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "lactose vrije vanille ijs in saliepapje";

        // Update nagerecht items
        nagerechtItems[0].innerHTML = "lactose vrije chocoladetaart";

        extraItems[0].innerHTML ="lactose vrije kruidenboter"
    } else {

        // Revert back to original text in hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "vanille ijs in salieboter";

        // Revert back to original text in nagerecht items
        nagerechtItems[0].innerHTML = "chocoladetaart";

        extraItems[0].innerHTML ="kruidenboter"
    }

}

// Add event listener to the lactosevrij checkbox to call updateMenu_lactosefunction when clicked
document.getElementById('lactosevrij').addEventListener('click', updateMenu_lactose);
