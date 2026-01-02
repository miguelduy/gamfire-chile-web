export function initCatalog() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.product-card');

    if (buttons.length === 0) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset styles
            buttons.forEach(b => {
                b.style.backgroundColor = 'transparent';
                b.style.color = 'black';
            });

            // Active style
            btn.style.backgroundColor = '#CE2029';
            btn.style.color = 'white';

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Add animation/fade-in here if desired
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
