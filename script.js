document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Initialize Code Syntax Highlighting
    hljs.highlightAll();

    // 3. Scroll Reveal Animations via IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If the element has metrics, animate the progress rings
                if (entry.target.querySelector('.metric-dial')) {
                    animateMetrics();
                }

                // Unobserve after revealing to only trigger once
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Animate the Metric Dials
    let metricsAnimated = false;

    function animateMetrics() {
        if (metricsAnimated) return;
        metricsAnimated = true;

        // Setup final values for the stroke offsets 
        // Circumference of the circle = 2 * PI * 40 ≈ 251.2
        const r2Progress = document.querySelector('.r2-progress');
        // R2 is 63.3%, so 251.2 * (1 - 0.633) = 92.19
        if (r2Progress) {
            setTimeout(() => {
                r2Progress.style.strokeDashoffset = '92.19';
            }, 500);
        }

        // MAE visually 
        const maeProgress = document.querySelectorAll('.error-progress')[0];
        if (maeProgress) {
            setTimeout(() => {
                maeProgress.style.strokeDashoffset = '140'; // arbitrary visual
            }, 700);
        }

        // RMSE visually
        const rmseProgress = document.querySelectorAll('.error-progress')[1];
        if (rmseProgress) {
            setTimeout(() => {
                rmseProgress.style.strokeDashoffset = '120'; // arbitrary visual
            }, 900);
        }
    }
});
