const wrapper = document.querySelector('.wrapper');
const btnLogin = document.querySelector('.btnLogin-popup');

btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active');
});
btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});