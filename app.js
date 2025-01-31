const btn = document.querySelector('#humberg');
const nav = document.querySelector('nav');
btn.addEventListener('click', () => {
    if (btn.classList.contains('fa-bars')) {
        btn.classList.remove('fa-bars');
        btn.classList.add('fa-times');
    }
    else {
        btn.classList.add('fa-bars');
        btn.classList.remove('fa-times');
    }
    nav.classList.toggle('show');
})