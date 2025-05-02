// Obtenemos el area de texto y los elementos donde mostraremos los resultados
const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

// Agregamos un evento que se ejecuta cada vez que el usuario escribe o borra algo
textInput.addEventListener('input', () => {
    const text = textInput.value; // Capturamos el texto actual del textArea

    // Contamos los caracteres (incluye espacios)
    charCount.textContent = text.length;

    // Contamos las palabras
    // 1. Usamos trim() para eliminar espacios al inicio y al final
    // 2. split para separar por espacios
    // 3. filter quita los elementos vacios ("") que puedan quedar por espacios dobles
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;
});