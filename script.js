/* 
   Solusi Hukum Masyarakat
   Main JavaScript Logic: Smooth interactions.
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hukum Masyarakat Responsive: Ready.');

    // Smooth Scroll for Section Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 70; // Adjust based on sticky header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Helper: Log Platform Clicks
    const actionButtons = document.querySelectorAll('.btn[target="_blank"]');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(`Action: ${btn.textContent.trim()} | Destination: ${btn.href}`);
        });
    });
});
