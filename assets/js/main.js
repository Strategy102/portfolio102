// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }                        
// Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // console.log({ toggle })
    // console.log({ nav })

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); //js css to display menu
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

//Active and remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

console.log({ navLink });

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show'); //when we click on each nav_link we remove the show class
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*======Scroll reveal animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

// scroll home
sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home__img', {delay: 400});
sr.reveal('.home__social-icon', {interval: 400});

// scroll about
sr.reveal('.about__image', {});
sr.reveal('.about__subtitle', {delay: 200});
sr.reveal('.about__text', {delay: 400});

// scroll skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 200});
sr.reveal('.skikls__data', {interval: 400});
sr.reveal('.skills__image', {delay: 400});

//scroll work
sr.reveal('.button', {interval: 200});

// scroll contact
sr.reveal('.contact__input', {interval: 300});
