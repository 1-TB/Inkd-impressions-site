document.addEventListener('DOMContentLoaded', function () {
    // add a click event listener to the hamburger button
    document.querySelector('.toggle-button').addEventListener('click', function () {
        // toggle the active class on the button
        this.classList.toggle('active');
    });
});