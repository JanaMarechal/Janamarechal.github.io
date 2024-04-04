function updateMenu_lactose() {
    // ik gebruik de variabelen om classes en id's op te halen uit de html, voor in JS
    var lactosevrijCheckbox = document.getElementById('lactosevrij');
    var extraItems = document.querySelectorAll('.extra span.lactose');
    var hoofdgerechtItems = document.querySelectorAll('.hoofdgerecht span.lactose');
    var nagerechtItems = document.querySelectorAll('.nagerecht span.lactose');

    // Als de checkbox is aangevinkt ...
    if (lactosevrijCheckbox.checked) {

        // Update hoofdgerecht items
        hoofdgerechtItems[0].innerHTML = "salie-olijfoliesaus";

        // Update nagerecht items
        nagerechtItems[0].innerHTML = "lactose vrije chocoladetaart";

        // Update extra items
        extraItems[0].innerHTML ="lactose vrije kruidenboter"
        
    } else {
        // ... als de checkbox niet is aangevinkt
        hoofdgerechtItems[0].innerHTML = "salieboter";

        nagerechtItems[0].innerHTML = "chocoladetaart";

        extraItems[0].innerHTML ="kruidenboter"
    }

}

// als de checkbox wordt geactiveerd wordt het geupdate
document.getElementById('lactosevrij').addEventListener('click', updateMenu_lactose);
