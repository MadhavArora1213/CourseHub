// Navbar

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

// Faq section

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

document.querySelectorAll(".flowchart-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(`You clicked ${item.textContent}`);
  });
});

// Swiper Section

var swiper = new Swiper(".mySwiper", {
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
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
Shery.mouseFollower();
Shery.makeMagnet(".button,#menu-btn,.bts", {});
Shery.textAnimate(".head" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".list", {
  y: -100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(".icons img",{
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".icons img",
        scrub: 1,       // Optional: Makes the animation tied to the scrollbar
        // markers: true      // Optional: Adds markers to visualize the trigger points
    }
})
gsap.from(".info h1,.info p",{
    y:50,
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".info h1, .info p",
        scrub: 1,       // Optional: Makes the animation tied to the scrollbar
        // markers: true      // Optional: Adds markers to visualize the trigger points
    }
})
gsap.from(".images img,.left img",{
    y:50,
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".info h1, .info p",
        scrub: 1,       // Optional: Makes the animation tied to the scrollbar
        // markers: true      // Optional: Adds markers to visualize the trigger points
    }
})
gsap.from(".right",{
  y:100,
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
      trigger: ".info h1, .info p",
      scrub: 1,       // Optional: Makes the animation tied to the scrollbar
      // markers: true      // Optional: Adds markers to visualize the trigger points
  }
})