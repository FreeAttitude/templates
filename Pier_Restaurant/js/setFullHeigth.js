document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelectorAll('.full_height');

    for (let i = 0; i < element.length; i++) {
        element[i].style.height = `${window.innerHeight}px`;
    }
})