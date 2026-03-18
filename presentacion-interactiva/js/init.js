document.addEventListener('DOMContentLoaded', () => {
    // Initialize Reveal.js
    Reveal.initialize({
        controls: true,
        progress: true,
        center: true,
        hash: true,
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'fast',
        backgroundTransition: 'fade',
        
        // Optional plugins
        plugins: [ RevealZoom, RevealNotes, RevealHistory ]
    });

    // Initialize Lucide Icons
    lucide.createIcons();
});
