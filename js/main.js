document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los hotspots
    const hotspots = document.querySelectorAll('.hotspot');
    
    // Agregar evento click a cada hotspot
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            const id = hotspot.id;
            switch(id) {
                case 'galeria':
                    window.location.href = 'galeria.html';
                    break;
                case 'videos':
                    window.location.href = 'videos.html';
                    break;
                case 'audios':
                    window.location.href = 'audios.html';
                    break;
            }
        });
    });

    // Manejo de reproducción de audio
    const singleItems = document.querySelectorAll('.single-item');
    
    singleItems.forEach(item => {
        item.addEventListener('click', function() {
            const audio = this.querySelector('audio');
            const playIcon = this.querySelector('.play-icon');
            
            // Pausar todos los demás audios
            document.querySelectorAll('audio').forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                    otherAudio.parentElement.querySelector('.play-icon').textContent = '▶';
                }
            });
            
            if (audio.paused) {
                audio.play();
                playIcon.textContent = '⏸';
            } else {
                audio.pause();
                playIcon.textContent = '▶';
            }
        });
    });

    // Manejo de videos
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            if (videoUrl) {
                window.open(videoUrl, '_blank');
            }
        });
    });
}); 