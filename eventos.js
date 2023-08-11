const saludarButton = document.getElementById('saludarButton');

saludarButton.onclick = function() {
    alert('Hola!');
};

const divSaludo = document.getElementById('divSaludo');

divSaludo.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

