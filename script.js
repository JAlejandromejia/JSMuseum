const pintura = document.getElementById('pintura');
const buttonNuevaPintura = document.getElementById('buttonNuevaPintura');
const categoriasSelect = document.getElementById('categorias'); 
const APIKey = 'FQNPgDbYpfWpQW7GPf4VJQ==fQj8ZemH7y0GLazP';
let category = 'nature'; 
let imageURL = '';

const obtenerNuevaImagen = () => {
    const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': APIKey,
            'Accept': 'image/jpg'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.blob();
    })
    .then(imageBlob => {
        imageURL = URL.createObjectURL(imageBlob);
        pintura.innerHTML = `<img src="${imageURL}" alt="Random Image" class="imagen-api" />`;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
};

categoriasSelect.addEventListener('change', event => {
    category = event.target.value;
    obtenerNuevaImagen();
});

buttonNuevaPintura.addEventListener('click', obtenerNuevaImagen);