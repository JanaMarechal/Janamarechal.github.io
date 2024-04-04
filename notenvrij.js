function updateMenu_noten() {
      // ik gebruik de variabelen om classes en id's op te halen uit de html, voor in JS
    var notenvrijCheckbox = document.getElementById('notenvrij');
    var voorgerechtItems = document.querySelectorAll('.voorgerecht span.noten');
    var hoofdgerechtItems = document.querySelectorAll('.hoofdgerecht span.noten');
    var nagerechtItems = document.querySelectorAll('.nagerecht span.noten');

    // Als de checkbox is aangevinkt ...
    if (notenvrijCheckbox.checked) {
    // Update voorgerecht items
        voorgerechtItems[0].innerHTML = "pesto";
        voorgerechtItems[1].innerHTML = "vanille crème";

     // Update voorgerecht items
        hoofdgerechtItems[0].innerHTML = "maiskorst";

    // Update nagerecht items
        nagerechtItems[0].innerHTML = "karamel";
        nagerechtItems[1].innerHTML = "vanille";

    } else {
        // ... als de checkbox niet is aangevinkt
        voorgerechtItems[0].innerHTML = "walnoten pesto";
        voorgerechtItems[1].innerHTML = "amandel crème";

        hoofdgerechtItems[0].innerHTML = "amandelkorst";

        nagerechtItems[0].innerHTML = "amaretto karamel";
        nagerechtItems[1].innerHTML = "walnoten";
    }
}

// als de checkbox wordt geactiveerd wordt het geupdate
document.getElementById('notenvrij').addEventListener('click', updateMenu_noten);
