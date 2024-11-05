document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la búsqueda con una especie predeterminada
    fetchSpeciesData('Ocelote');

    // Configurar el evento de búsqueda
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        fetchSpeciesData(query);
    });
});

function fetchSpeciesData(query) {
    fetch(`/buscarEspecie?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loadSpeciesData(data);
        })
        .catch(error => {
            console.error('Error fetching species data:', error);
        });
}

function loadSpeciesData(data) {
    const speciesSection = document.getElementById('species-section');

    // Verificamos que speciesSection exista antes de continuar
    if (!speciesSection) {
        console.error('El elemento species-section no existe en el DOM.');
        return;
    }

    speciesSection.innerHTML = ''; // Limpiar el contenido existente

    data.forEach(item => {
        // Crear un contenedor para la tarjeta
        const speciesCard = document.createElement('div');
        speciesCard.classList.add('species-card');

        // Crear los elementos de la tarjeta
        const scientificName = document.createElement('h3');
        scientificName.textContent = item.scientificNameSimple;

        const commonNames = document.createElement('p');
        commonNames.textContent = item.commonNames && item.commonNames.length > 0
            ? 'Nombres Comunes: ' + item.commonNames.map(nameObj => nameObj.name).join(', ')
            : 'Nombres Comunes: No disponible';

        const threatStatus = document.createElement('p');
        threatStatus.textContent = 'Estado de Amenaza: ' + (item.threatStatusValue || 'No disponible');

        const image = document.createElement('img');
        if (item.imageInfo && item.imageInfo.thumbnailImage) {
            image.src = item.imageInfo.thumbnailImage;
            image.alt = item.scientificNameSimple;
            image.style.width = "400px"; // Ajustar tamaño de la imagen
        } else {
            image.alt = "Imagen no disponible";
        }

        // Agregar los elementos a la tarjeta
        speciesCard.appendChild(scientificName);
        speciesCard.appendChild(commonNames);
        speciesCard.appendChild(threatStatus);
        speciesCard.appendChild(image);

        // Agregar la tarjeta al contenedor principal
        speciesSection.appendChild(speciesCard);
    });
}



