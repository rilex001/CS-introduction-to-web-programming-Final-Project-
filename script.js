const form = document.querySelector('.contactForm');
const fun = document.querySelector('#javascript');


const ButtonColor = () => {
    let d = new Date()
    let h = d.getHours();
    d > 12 ? fun.setAttribute('style', 'color: red;') : fun.setAttribute('style', 'color: black;')
}


form.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Hvala ${form.name.value} sto ste nas kontaktirali :) `);
});

ButtonColor();