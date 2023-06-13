document.addEventListener('DOMContentLoaded', function () {
    const body = document.getElementById('body');
    const navBar = document.getElementById('navBar');

    function handleScroll() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 0) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
})