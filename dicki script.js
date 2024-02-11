
document.addEventListener('DOMContentLoaded', () => {
    initRatingSystem();
});

function initRatingSystem() {
    const ratingContainers = document.querySelectorAll('.rating');

    ratingContainers.forEach(container => {
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.textContent = '☆';
            star.dataset.value = i;
            star.onclick = () => setRating(container, i);
            container.appendChild(star);
        }
    });
}

function setRating(container, rating) {
    const stars = container.querySelectorAll('.star');
    stars.forEach(star => {
        star.textContent = star.dataset.value <= rating ? '★' : '☆';
    });
    console.log(`Bewertung: ${rating} Sterne`);
}
