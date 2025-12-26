document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];
    
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('displayName').textContent = name;
            document.getElementById('displayPhoto').src = e.target.result;
            document.getElementById('profileDisplay').classList.remove('hidden');
        };
        reader.readAsDataURL(photoFile);
    }
});