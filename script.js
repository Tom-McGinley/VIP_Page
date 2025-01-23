document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti');
    const fileInput = document.getElementById('upload');
    const previewImg = document.getElementById('preview-img');

    // Create gold confetti
    function createConfettiPiece() {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        const position = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 2;

        confetti.classList.add('confetti-piece');
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${position}%`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;

        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), (delay + duration) * 1000);
    }

    // Generate confetti
    for (let i = 0; i < 100; i++) {
        createConfettiPiece();
    }

    // Handle image preview
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
