// JavaScript код для фільтрації за категоріями
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.dataset.category;
            items.forEach(item => {
                if (item.classList.contains(category) || category === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
