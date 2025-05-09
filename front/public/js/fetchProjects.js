document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:8000/api/projects' + Date.now(), {
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        const rawResponse = await response.text();

        try {
            const data = JSON.parse(rawResponse);
            if (data.success) {
                renderProjects(data.data);
            } else {
                throw new Error(data.error || 'Error desconocido');
            }
        } catch (e) {
            console.error('Respuesta cruda:', rawResponse);
            throw new Error(`El servidor respondió con: ${rawResponse.substring(0, 100)}...`);
        }

    } catch (error) {
        const errorContainer = document.getElementById('projects-container');
        errorContainer.innerHTML = `
        <div class="error" style="color: red; padding: 20px; border: 1px solid #f00;">
          <h3>Error crítico</h3>
          <p>${error.message}</p>
          <p>Comprueba:</p>
          <ul>
            <li>Que el backend esté corriendo en http://localhost:8000</li>
            <li>Que la ruta /api/projects exista</li>
            <li>Que no haya redirecciones</li>
          </ul>
          <button onclick="location.reload()">Reintentar</button>
        </div>
      `;
        console.error('Error completo:', error);
    }
});