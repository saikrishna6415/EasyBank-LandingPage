const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navigation = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    close.style.display = 'block';
    navigation.classList.add('menu')
})

close.addEventListener('click', () => {
    close.style.display = 'none';
    hamburger.style.display = 'block';
    navigation.classList.remove('menu')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        close.style.display = 'none';
        hamburger.style.display = 'none';
        navigation.classList.remove('menu')
    } else
        hamburger.style.display = 'block';
})