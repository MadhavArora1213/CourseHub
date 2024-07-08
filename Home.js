// NavBar

const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
    mobileMenu.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled");
  }
});
 
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Typed js

let typed = new Typed(".text", {
  strings: ["Data Science", "Full Stack Development", "Tech", "Electric Vehicle Design"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// This code is for counters
document.addEventListener('scroll', function() {
  const counters = document.querySelectorAll('.counter-numbers');
  const speed = 400; 

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/\+/g, ''); // Remove existing plus sign if any

      // Lower increment to slow down counting speed
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc) + '+';
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + '+';
      }
    };

    updateCount();
  });
});

// Splide Slider

let splide = new Splide( '.splide', {
  direction: 'ttb',
  height: '10rem',
  type: "loop",
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  speed: 1000,
  rewind: true,
} );

splide.mount();

let splide2 = new Splide( '#splide2', {
  direction: 'ttb',
  height: '10rem',
  type: "loop",
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 4000,
  speed: 1000,
  rewind: true,
} );

splide2.mount();

let splide3 = new Splide( '#splide3', {
  direction: 'ttb',
  height: '10rem',
  type: "loop",
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  speed: 1000,
  rewind: true,
} );

splide3.mount();

let splide4 = new Splide( '#splide4', {
  direction: 'ttb',
  height: '10rem',
  type: "loop",
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 4000,
  speed: 1000,
  rewind: true,
} );

splide4.mount();

let splide5 = new Splide( '#splide5', {
  direction: 'ttb',
  height: '10rem',
  type: "loop",
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  speed: 1000,
  rewind: true,
} );

splide5.mount();

let splide6 = new Splide( '#splide6', {
  direction: 'ttb',
  height: '5rem',
  type: "loop",
  perPage: 1,
  perMove: 1,
  autoplay: true,
  interval: 4000,
  speed: 1000,
  rewind: true,
} );

splide6.mount();

// GSAP js

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate elements within .element container
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".featuredImage",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1.easeInOut,
});

// Animate images within .images container
let images = document.querySelectorAll(".images img");
images.forEach((image, index) => {
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      start: "top 80%", // Start animation when image enters the viewport
      end: "bottom 20%", // End animation when image leaves the viewport
      scrub: 1,
      toggleActions: "play none none reverse", // Play animation on scroll, reverse on scroll up
    },
    opacity: 0,
    y: 100,
    duration: 1
  });
});

// Swiper JS

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  loop: true,
  coverflowEffect: {
      rotate: 100,
      stretch: 0,
      
      depth: 100,
      modifier: 2,
      slideShadows: true,
  },
  breakpoints: {
      250: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      480: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      }
  }
});

// Splide Slider

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Splide7 (Left Slider)
  new Splide('#splide7', {
    type: 'loop',
    direction:'rtl',
    perPage: 1,
    autoplay: true,
    interval: 2000,
    pauseOnHover: false,
  }).mount();

  // Initialize Splide8 (Right Slider)
  new Splide('#splide8', {
    type:'loop',
    perPage: 1,
    autoplay: true,
    interval: 2000,
    pauseOnHover: false,
  }).mount();
});

Shery.mouseFollower();
Shery.makeMagnet(".button,#menu-btn,.bts", {
});
Shery.textAnimate(".head" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});






var tl = gsap.timeline();
tl.from(".list",{  
    y:-100,
    duration:0.8,
    // delay:0.3,
    opacity:0,
    stagger:0.2
})