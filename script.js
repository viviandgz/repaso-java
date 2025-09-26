document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Credenciales predefinidas
    const CORRECT_USERNAME = "admin";
    const CORRECT_PASSWORD = "123";

    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        // Credenciales correctas: redirigir a la página de bienvenida
        window.location.href = "bienvenida.html";
    } else {
        // Credenciales incorrectas: mostrar mensaje de error
        errorMessage.textContent = "⚠️Usuario o contraseña incorrectos.⚠️";
    }
});