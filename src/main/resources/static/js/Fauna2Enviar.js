// Creamos una clase de Cola
class Queue {
    constructor() {
        this.items = [];
    }

    // Agrega un elemento a la cola
    enqueue(element) {
        this.items.push(element);
    }

    // Retorna el número de elementos en la cola
    size() {
        return this.items.length;
    }

    // Retorna el número de elementos "correct" en la cola
    countCorrect() {
        return this.items.filter(item => item === "correct").length;
    }
}

document.querySelector('.submit-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir que el formulario recargue la página

    // Respuestas correctas para cada pregunta
    const correctAnswers = {
        question1: "condor",
        question2: "camaron_fantasma",
        question3: "venado",
        question4: "guacamaya_azul",
        question5: "tapir_amazonia"
    };
    const responsesQueue = new Queue(); // Creamos una nueva cola para almacenar las respuestas

    // Verificamos cada pregunta y guardamos en la cola si la respuesta fue correcta o incorrecta
    for (let question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            responsesQueue.enqueue("correct"); // Encolamos "correct" si la respuesta es correcta
        } else {
            responsesQueue.enqueue("incorrect"); // Encolamos "incorrect" si la respuesta es incorrecta
        }
    }

    // Calculamos los porcentajes de respuestas correctas e incorrectas
    const totalResponses = responsesQueue.size();
    const correctCount = responsesQueue.countCorrect();
    const correctPercentage = Math.round((correctCount / totalResponses) * 100);
    const incorrectPercentage = 100 - correctPercentage;

    // Actualizamos las barras de progreso de aciertos y errores
    const correctBar = document.querySelector('#correct-bar .greennature-skill-bar-progress');
    const correctText = document.querySelector('#correct-bar .skill-bar-percent');
    correctBar.style.width = `${correctPercentage}%`;
    correctText.textContent = `${correctPercentage}%`;

    const incorrectBar = document.querySelector('#incorrect-bar .greennature-skill-bar-progress');
    const incorrectText = document.querySelector('#incorrect-bar .skill-bar-percent');
    incorrectBar.style.width = `${incorrectPercentage}%`;
    incorrectText.textContent = `${incorrectPercentage}%`;

    const message = document.querySelector('#msg');
    if (correctPercentage === 100) {
        message.textContent = 'Excelente! has obtenido un puntaje perfecto en la prueba, genial 🥳';
    } else if (correctPercentage >= 60) {
        message.textContent = 'Bien Hecho, has aprobado la mayoría de nuestras preguntas :D sigue así';
    } else if (correctPercentage <= 59) {
        message.textContent = 'No está mal, pero aún puedes mejorar mucho más, ánimo ^-^';
    }

});
