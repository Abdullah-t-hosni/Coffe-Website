// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Nav open close
const body = document.querySelector("body"),
      navMenu = body.querySelector(".menu-content"),
      navOpenBtn = body.querySelector(".navOpen-btn"),
      navCloseBtn = navMenu.querySelector(".navClose-btn");

if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  });
}

if (navMenu && navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    body.style.overflowY = "auto";
  });
}

// Change header bg color and Scroll up button
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const header = document.querySelector("header");
  const scrollUpBtn = document.querySelector(".scrollUp-btn");
  const sections = document.querySelectorAll(".section[id]");

  if (scrollY > 50) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }

  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 60;
    let navID = document.querySelector(`.menu-content a[href*=${section.id}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navID.classList.add("active-nav");
    } else {
      navID.classList.remove("active-nav");
    }

    navID.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "auto";
    });
  });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 250,
});

sr.reveal(
  `.section-title, .section-subtitle, .section-description, .brand-img, .testimonial, .newsletter, .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`,
  { interval: 100 }
);
sr.reveal(`.about-imageContent, .menu-items`, { origin: "left" });
sr.reveal(`.about-details, .time-table`, { origin: "right" });

// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};


// sr.reveal('.section', { interval: 200 });
// sr.reveal('.section-title', { delay: 800 });
// sr.reveal('.section-subtitle', { delay: 400 });
// sr.reveal('.section-description', { delay: 1000 });
