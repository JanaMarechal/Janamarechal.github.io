function updateMenu_gluten() {
    var glutenvrijCheckbox = document.getElementById('glutenvrij');
    var extraItems = document.querySelectorAll('.extra span.gluten');
    var voorgerechtItems = document.querySelectorAll('.voorgerecht span.gluten');
    var hoofdgerechtItems = document.querySelectorAll('.hoofdgerecht span.gluten');
    var nagerechtItems = document.querySelectorAll('.nagerecht span.gluten');

    // Als de checkbox is aangevinkt ...
    if (glutenvrijCheckbox.checked) {
        // Update hoofdgerecht items
        voorgerechtItems[0].innerHTML = "glutenvrije pistolet";

        // Update hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "rijst";

        // Update nagerecht items
        nagerechtItems[0].innerHTML = "vanille ijs met chocolade saus";

        // Update de extra items
        extraItems[0].innerHTML ="glutenvrije pistolet"

    } else {
        // ... als de checkbox niet is aangevinkt
        voorgerechtItems[0].innerHTML = "stokbrood";
        
        hoofdgerechtItems[0].innerHTML = "couscous";

        nagerechtItems[0].innerHTML = "tiramisu";

        extraItems[0].innerHTML ="brood"
    }

}

// als de checkbox wordt geactiveerd wordt het geupdate
document.getElementById('glutenvrij').addEventListener('click', updateMenu_gluten);
