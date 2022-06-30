const body = document.querySelector('body');
const navigation = document.querySelector(".menu-scrolling");
const meeting = document.querySelector(".meeting");

window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
      navigation.classList.add('active');
      meeting.style.display = "none";
    } else {
        navigation.classList.remove('active');
        meeting.style.display = "block";
    }
});


const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger');
const closeBurgerBtn = document.querySelectorAll('.close-burger');

burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    body.classList.toggle('stop-scrolling');
    if (burgerBtn.innerHTML === "[ MENU ]"){
        burgerBtn.innerHTML = "[ CLOSE ]";
    }else{
        burgerBtn.innerHTML = "[ MENU ]";
    }
    closeBurger();
});

function closeBurger(){
    closeBurgerBtn.forEach(trigger => trigger.addEventListener("click", ()=>{
        burgerMenu.classList.remove('active');
        body.classList.remove('stop-scrolling');
        burgerBtn.innerHTML = "[ MENU ]";
    }));
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    effect: "creative",

    creativeEffect: {
        prev: {
        shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});