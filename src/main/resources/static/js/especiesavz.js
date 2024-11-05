document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la búsqueda con una especie predeterminada
    fetchSpeciesData('Ocelote');

    // Configurar el evento de búsqueda
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value || '';
        const family = document.getElementById('family-input').value || '';
        const order = document.getElementById('order-input').value || '';
        const className = document.getElementById('class-input').value || '';
        const department = document.getElementById('department-input').value || '';

        // Llamar a la función de búsqueda con los parámetros necesarios
        fetchSpeciesData(query, family, order, className, department);
    });
});

function fetchSpeciesData(query, family, order, className, department) {
    // Construir la URL con los parámetros
    const url = `/buscarEspecie?q=${encodeURIComponent(query)}&family=${encodeURIComponent(family)}&order=${encodeURIComponent(order)}&class=${encodeURIComponent(className)}&department=${encodeURIComponent(department)}`;

    console.log("URL:", url); // Imprimir URL para verificar

    fetch(url)
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

    if (!speciesSection) {
        console.error('El elemento species-section no existe en el DOM.');
        return;
    }

    speciesSection.innerHTML = ''; // Limpiar el contenido existente

    data.forEach(item => {
        const speciesCard = document.createElement('div');
        speciesCard.classList.add('species-card');

        const scientificName = document.createElement('h3');
        scientificName.textContent = item.scientificNameSimple;

        const commonNames = document.createElement('p');
        commonNames.textContent = item.commonNames && item.commonNames.length > 0
            ? 'Nombres Comunes: ' + item.commonNames.map(nameObj => nameObj.name).join(', ')
            : 'Nombres Comunes: No disponible';

        const threatStatus = document.createElement('p');
        threatStatus.textContent = 'Estado de Amenaza: ' + (item.threatStatusValue || 'No disponible');

        const family = document.createElement('p');
        family.textContent = 'Familia: ' + (item.family || 'No disponible');

        const order = document.createElement('p');
        order.textContent = 'Orden: ' + (item.order || 'No disponible');

        const className = document.createElement('p');
        className.textContent = 'Clase: ' + (item.className || 'No disponible');

        const department = document.createElement('p');
        department.textContent = 'Departamento: ' + (item.department || 'No disponible');

        const image = document.createElement('img');
        if (item.imageInfo && item.imageInfo.thumbnailImage) {
            image.src = item.imageInfo.thumbnailImage;
            image.alt = item.scientificNameSimple;
            image.style.width = "400px"; // Ajustar tamaño de la imagen
        } else {
            image.alt = "Imagen no disponible";
        }

        // Agregar los elementos a la tarjeta de especie
        speciesCard.appendChild(scientificName);
        speciesCard.appendChild(commonNames);
        speciesCard.appendChild(threatStatus);
        speciesCard.appendChild(family);
        speciesCard.appendChild(order);
        speciesCard.appendChild(className);
        speciesCard.appendChild(department);
        speciesCard.appendChild(image);

        speciesSection.appendChild(speciesCard);
    });
}


