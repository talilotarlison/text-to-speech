
/* Links de refêrencia :
 * https://developer.mozilla.org/pt-BR/docs/Web/API/SpeechSynthesisUtterance/voice
 * https://www.w3schools.com/tags/tag_select.asp
 */

// Crie uma instância da classe SpeechSynthesisUtterance

const speech = new SpeechSynthesisUtterance();

// Defina as propriedades desejadas (volume, taxa e tom)
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;

// Obtenha as vozes disponíveis
const voices = window.speechSynthesis.getVoices();
// Preencha o menu de seleção com as vozes
const voicesSelect = document.getElementById('voices');
voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = voice.name;
    voicesSelect.appendChild(option);
});

// Quando o botão "Iniciar" for clicado, fale o texto
document.getElementById('start').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    speech.text = text;
    speech.voice = voices[voicesSelect.value];
    window.speechSynthesis.speak(speech);
});
