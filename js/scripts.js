'use strict';

// DOM
// zmienna stała
const hamburger = document.querySelector('.top span');

const nav = document.querySelector('nav');

//pobieramy style przeglądarki dla nawigacji
const styleNav = getComputedStyle(nav);

//nasłuchujemy kliknięcie i wtedy coś się dzieje ()=> jak klikniemy to się wykona...
hamburger.addEventListener('click', () => {
    //alert('test');

    if(styleNav.display == 'none') {

        nav.style.display = 'block';

        hamburger.innerText = 'close';

    } else {
        nav.style.display = 'none';

        hamburger.innerText = 'menu';
    }
    
});
