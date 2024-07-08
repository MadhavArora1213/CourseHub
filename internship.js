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

//This code is for counters
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter-numbers');
  const speed = 200; 

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/\+/g, ''); 
      
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

gsap.from(".boxes",{
  scale:2,
  opacity:0,
  duration:0.5,
  stagger:0.3,
  scrollTrigger:{
      trigger: ".boxes",
      scroller: "body",
  }
})


// Search_bar JS 

// function search() {
//   let filter = document.getElementById('search').value.toUpperCase();
//   let item = document.querySelectorAll('.boxes');
//   let l = document.getElementsByTagName('h1');
//   for (let i = 0; i < l.length; i++) {
//       let a = item[i].getElementsByTagName('h1')[0];
//       let value = a.innerHTML || a.innerText || a.textContent;
//       if (value.toUpperCase().indexOf(filter) > -1) {
//           item[i].style.display = "inline-block";
//       } else {
//           item[i].style.display = "none";
//       }
//   }
// }


let courses = ["UI/UX FUNDAMENTAL", "DATA SCIENCE", "FULL STACK", "FRONTEND", "BACKEND","CLOUD COMPUTING","PYTHON","AI","ML","DIGITAL MARKETING","JAVA SCRIPT","CYBER SECURITY",
  "OPERATING SYSTEM","PD","APTITUDE","DSA"]; // Example course list

function search() {
  let filter = document.getElementById('search').value.toUpperCase();
  let suggestions = document.getElementById('suggestions');
  suggestions.innerHTML = ''; // Clear previous suggestions
  
  if (filter.length > 0) {
    let filteredCourses = courses.filter(course => course.toUpperCase().includes(filter));
    
    filteredCourses.forEach(course => {
      let div = document.createElement('div');
      div.innerHTML = course;
      div.onclick = function() {
        document.getElementById('search').value = course;
        suggestions.innerHTML = ''; // Clear suggestions when one is selected
      };
      suggestions.appendChild(div);
    });
  }

  let item = document.querySelectorAll('.boxes');
  let l = document.querySelectorAll('h1');
  for (let i = 0; i < l.length; i++) {
      let a = item[i].querySelectorAll('h1')[0];
      let value = a.innerHTML || a.innerText || a.textContent;
      if (value.toUpperCase().indexOf(filter) > -1) {
          item[i].style.display = "inline-block";
      } else {
          item[i].style.display = "none";
      }
  }
}
