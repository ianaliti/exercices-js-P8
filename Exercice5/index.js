document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', handleSubmit);
    form.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    });

    function handleSubmit(event) {
        event.preventDefault();

        form.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.setAttribute('tabindex', '-1');
        successMessage.focus();

        form.reset();
    }
});