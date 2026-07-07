document.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) {
        AOS.init({
            duration: 800,
            offset: 80,
            once: true,
            easing: 'ease-out-cubic'
        });
    }

    const lazyVideos = document.querySelectorAll('video.lazy-video');

    const loadVideo = (video) => {
        if (video.dataset.loaded === 'true') return;

        const sources = video.querySelectorAll('source[data-src]');

        sources.forEach((source) => {
            source.src = source.dataset.src;
        });

        video.load();
        video.dataset.loaded = 'true';

        if (video.dataset.autoplay === 'true') {
            video.play().catch(() => {});
        }
    };

    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const video = entry.target;

                if (entry.isIntersecting) {
                    loadVideo(video);

                    if (video.dataset.autoplay === 'true') {
                        video.play().catch(() => {});
                    }
                } else {
                    video.pause();
                }
            });
        }, {
            rootMargin: '300px 0px',
            threshold: 0.1
        });

        lazyVideos.forEach((video) => videoObserver.observe(video));
    } else {
        lazyVideos.forEach(loadVideo);
    }

    const spriteBoxes = document.querySelectorAll('.sprite-box[data-gif]');

    spriteBoxes.forEach((box) => {
        const img = box.querySelector('img.pixel-art');
        if (!img) return;

        const gifPath = box.getAttribute('data-gif');
        const pngPath = img.getAttribute('src');

        box.addEventListener('click', () => {
            const isPlaying = box.classList.contains('playing');

            img.src = isPlaying ? pngPath : gifPath;
            box.classList.toggle('playing', !isPlaying);
        });
    });

    console.log('Portafolio Binchis cargado correctamente 🎨');
});