// SCROLL ANIMATION REVEAL
window.addEventListener('scroll', reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');

            for(var i = 0; i < reveals.length; i++){

                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if (revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
                else{
                    reveals[i].classList.remove('active');
                }
            }
        }
        window.addEventListener('scroll', reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');

            for(var i = 0; i < reveals.length; i++){

                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if (revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }
                else{
                    reveals[i].classList.remove('active');
                }
            }
        }
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}
// SIGNUP POPUP MODAL
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('signup-modal');
    const registerLink = document.getElementById('register-link');
    const fileInputID = document.getElementById('file-input-id');
    const fileNameDisplayID = document.getElementById('file-name-id');
    const fileInputAddress = document.getElementById('file-input-address');
    const fileNameDisplayAddress = document.getElementById('file-name-address');
    const closeModal = document.querySelector('.close');

    registerLink.addEventListener('click', function () {
        modal.classList.add('show'); // Add 'show' class to trigger animation
    });
    
    closeModal.addEventListener('click', function () {
        console.log('Close button clicked'); // Check if this log appears in the console
        modal.classList.remove('show');
    });
    
    fileInputID.addEventListener('change', function () {
        const selectedFileName = this.files[0] ? this.files[0].name : 'No file selected';
        fileNameDisplayID.textContent = selectedFileName;
    });

    closeModal.addEventListener('click', function () {
        modal.classList.remove('show'); // Remove 'show' class to hide modal
    });

    document.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show'); // Remove 'show' class to hide modal
        }
    });

    let container = document.getElementById('container')

    toggle = () => {
        container.classList.toggle('sign-in')
        container.classList.toggle('sign-up')
    }

    setTimeout(() => {
        container.classList.add('sign-in')
    }, 200)
});


//ABOUT.HTML JAVASCRIPT


const arrow = document.getElementById('scrollArrow');
const sectionToScroll = document.getElementById('scrollToSection');


arrow.addEventListener('click', () => {
    
    const targetPosition = sectionToScroll.offsetTop;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});