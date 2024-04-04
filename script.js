// Functie om het menu bij te werken op basis van de lactosevrije checkbox
function updateMenu_lactose() {
    // Plaats hier je code om het menu bij te werken op basis van de lactosevrije checkbox
}

// Event listener toevoegen voor lactosevrije checkbox
document.getElementById('lactosevrij').addEventListener('click', updateMenu_lactose);

// Functie om checkboxen uit te vinken wanneer de verzendknop wordt geklikt en bedankbericht weer te geven
function submitForm() {
    uncheckCheckboxes(); // Vink alle checkboxen uit
    showThankYouMessage(); // Laat het bedankbericht zien
}

// Event listener toevoegen voor verzendknop
document.getElementById('submitbutton').addEventListener('click', submitForm);

// Functie om checkboxen uit te vinken
function uncheckCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

// Functie om het bedankbericht weer te geven
function showThankYouMessage() {
    var bedanktDiv = document.getElementById('bedankt');
    bedanktDiv.innerText = "Bedankt voor het doorgeven, we komen je bestelling opnemen en houden hierbij rekening met je allergie.";
    bedanktDiv.style.display = "block"; // Maak het bericht zichtbaar
}

// Functie om het bedankbericht weer te geven
function showThankYouMessage() {
    var bedanktDiv = document.getElementById('bedankt');
    bedanktDiv.innerText = "Bedankt voor het doorgeven, we komen je bestelling opnemen en houden hierbij rekening met je allergie.";
    bedanktDiv.style.display = "block"; // Maak het bericht zichtbaar

    // Schakel de checkboxen uit
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.disabled = true;
    });
}
