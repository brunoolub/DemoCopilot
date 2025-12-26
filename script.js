document.getElementById('profileForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];
    
    if (!name || !photoFile) {
        alert('Nombre y foto son requeridos');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('photo', photoFile);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        const message = await response.text();
        document.getElementById('message').textContent = message;
        document.getElementById('message').classList.remove('hidden');
    } catch (error) {
        document.getElementById('message').textContent = 'Error subiendo el perfil';
        document.getElementById('message').classList.remove('hidden');
    }
});