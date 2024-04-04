// Function to update menu items based on the glutenvrij checkbox state
function updateMenu_gluten() {
    var glutenvrijCheckbox = document.getElementById('glutenvrij');
    var extraItems = document.querySelectorAll('.extra span.gluten');
    var voorgerechtItems = document.querySelectorAll('.voorgerecht span.gluten');
    var hoofdgerechtItems = document.querySelectorAll('.hoofdgerecht span.gluten');
    var nagerechtItems = document.querySelectorAll('.nagerecht span.gluten');

    // Check if the glutenvrij checkbox is checked
    if (glutenvrijCheckbox.checked) {


        voorgerechtItems[0].innerHTML = "glutenvrije pistolet";
        // Update hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "rijst";

        // Update nagerecht items
        nagerechtItems[0].innerHTML = "vanille ijs met chocolade saus";

        extraItems[0].innerHTML ="glutenvrije pistolet"
    } else {


        voorgerechtItems[0].innerHTML = "stokbrood";
        // Revert back to original text in hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "couscous";

        // Revert back to original text in nagerecht items
        nagerechtItems[0].innerHTML = "tiramisu";

        extraItems[0].innerHTML ="brood"
    }

}

// Add event listener to the glutenvrij checkbox to call updateMenu_glutenfunction when clicked
document.getElementById('glutenvrij').addEventListener('click', updateMenu_gluten);
