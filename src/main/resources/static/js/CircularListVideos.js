// Array que contiene las URLs de los videos de YouTube
const videos = [
    "https://www.youtube.com/embed/F7wM27WpGUk?si=GoyrYEoI8AleacpC",
    "https://www.youtube.com/embed/-kdqR_WOSuQ?si=FROGvJE_qKtixWJZ",
    "https://www.youtube.com/embed/VPeYAPd6L-E?si=KR06ovA42rcFBw5f",
    "https://www.youtube.com/embed/uDTAYlVSzdM?si=MuL5-2DzAc2qcQLF"
];


// Variable para mostrar el video actual en el slider
let currentIndex = 0;

function showVideo(index) {
    const videoContainer = document.getElementById("video-slider");
    videoContainer.innerHTML = `
        <iframe width="1120" height="630" src="${videos[index]}" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
}

// Función para pasar al siguiente video en la lista circular
function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    showVideo(currentIndex);
}

// Función para pasar al video anterior en la lista circular
function previousVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    showVideo(currentIndex);
}

// Inicializa el slider mostrando el primer video
showVideo(currentIndex);

// Opcional: Configurar botones para navegar entre videos
document.getElementById("next").addEventListener("click", nextVideo);
document.getElementById("previous").addEventListener("click", previousVideo);