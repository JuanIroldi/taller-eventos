const divSaludo = document.getElementById('divSaludo');

divSaludo.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

const saludarButton = document.getElementById('saludarButton');

saludarButton.addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation(); // Detiene la propagación del evento al div
});