document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 2. Marquee / Moving Images Logic
    // We duplicate the inner contents of the marquee exactly once more when it's initialized.
    const marquee = document.getElementById('marquee');
    if (marquee) {
        // Clone all current children
        const children = Array.from(marquee.children);
        children.forEach(child => {
            const clone = child.cloneNode(true);
            // Hide clones from screen readers
            clone.setAttribute('aria-hidden', 'true');
            marquee.appendChild(clone);
        });

        // Ensure seamless looping by dynamically adjusting animation based on real width
        const totalKids = marquee.children.length; // Will be 6 with duplicates
    }

    // 3. Navbar logic (glass effect enhancement on scroll)
    const header = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(11, 12, 16, 0.8)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(11, 12, 16, 0.6)';
            header.style.boxShadow = 'none';
        }
    });
});
