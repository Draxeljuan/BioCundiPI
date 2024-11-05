document.addEventListener('DOMContentLoaded', () => {

    const plantSearchTerms = ['Chusquea scandens', 'Grayumo', 'Anemia hirsuta', 'microdonta', 'Guadua angustifolia'];
    const faunaSearchTerms = ['Dasypus kappleri', 'Cerdocione', 'Accipiter striatus', 'Oryctolagus', 'Cavia porcellus']; // Especies

    fetchAllSpeciesData(plantSearchTerms, 'image-slider'); // Para plantas
    fetchAllSpeciesData(faunaSearchTerms, 'fauna-slider'); // Para fauna
});

function fetchAllSpeciesData(searchTerms, sliderId) {
    const promises = searchTerms.map(term => fetchSpeciesData(term));
    Promise.all(promises)
        .then(results => {
            const combinedResults = results.flat(); // Combina todos los arrays
            loadImageSlider(combinedResults, sliderId); // Carga en el slider correspondiente
        });
}

function fetchSpeciesData(query) {
    return fetch(`/buscarEspecie?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching species data:', error);
            return []; // Retorna un array vacío si hay error
        });
}

function loadImageSlider(data, sliderId) {
    const slider = document.getElementById(sliderId);
    slider.innerHTML = ''; // Limpiar el contenido existente

    data.forEach(item => {
        if (item.imageInfo && item.imageInfo.thumbnailImage) {
            const img = document.createElement('img');
            img.src = item.imageInfo.thumbnailImage;
            img.alt = item.scientificNameSimple;
            img.style.width = "700px";
            img.classList.add('slider-image');

            const caption = document.createElement('p');
            caption.textContent = item.scientificNameSimple;

            const slideContainer = document.createElement('div');
            slideContainer.classList.add('slide-container');

            slideContainer.appendChild(img);
            slideContainer.appendChild(caption);
            slider.appendChild(slideContainer);
        }
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll(`#${sliderId} .slide-container`); // Usa el ID del slider

    const showSlide = (index) => {
        if (slides.length === 0) return; // No hay slides disponibles

        currentIndex = (index + slides.length) % slides.length;

        slides.forEach(slide => slide.style.display = 'none'); // Oculta todos los slides
        slides[currentIndex].style.display = 'block'; // Muestra el slide actual
    };

    document.getElementById(`${sliderId}-next-button`).addEventListener('click', () => {
        showSlide(currentIndex + 1); // Muestra el siguiente slide
    });

    document.getElementById(`${sliderId}-prev-button`).addEventListener('click', () => {
        showSlide(currentIndex - 1); // Muestra el slide anterior
    });

    showSlide(currentIndex); // Muestra el primer slide
}
