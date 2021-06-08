const form = document.querySelector('.contactForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Hvala ${form.name.value} sto ste nas kontaktirali :) `);
});