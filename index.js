const text = document.querySelector(".thank-for-watching-circle-text p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
  )
  .join("");

document.addEventListener("DOMContentLoaded", function () {
  const floatingButton = document.querySelector(".menu");
  const floatingMenu = document.querySelector(".menu-floating");
  const floatingButtonIcon = document.querySelector(".menu-button .fa-solid");

  floatingButtonIcon.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentNode.parentNode.classList.toggle("open");
    if (floatingButtonIcon.classList.contains("fa-bars")) {
      floatingButtonIcon.classList.remove("fa-bars");
      floatingButtonIcon.classList.add("fa-close");
      floatingMenu.style.display = "block";
    } else if (floatingButtonIcon.classList.contains("fa-close")) {
      floatingButtonIcon.classList.remove("fa-close");
      floatingButtonIcon.classList.add("fa-bars");
      floatingMenu.style.display = "none";
    }
  });
});

const projectBtn = document.querySelector("#projectBtn");

projectBtn.addEventListener("click", function () {
  // scroll to #project
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

const contactBtn = document.querySelector(".button-contact");

contactBtn.addEventListener("click", function () {
  // scroll to #project
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

const TL = gsap.timeline();

TL.from(
  ".banner-topbar",
  {
    autoAlpha: 0,
    duration: 1,
    x: 200,
  },
  "-=0.5"
)
  .from(".banner-content-left", {
    autoAlpha: 0,
    duration: 1,
    y: -50,
  })
  .from(
    ".banner-content-right",
    {
      autoAlpha: 0,
      duration: 1,
      y: -50,
    },
    "-=0.5"
  )
  .from(".profile-border", {
    autoAlpha: 0,
    duration: 1,
    y: 50,
  })
  .from(".timeline-education", {
    duration: 0.5,
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".timeline-education",
      start: "top 80%",
      end: "top 60%",
      scrub: 0.2,
    },
  })
  .from(".timeline-work", {
    duration: 0.5,
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".timeline-work",
      start: "top 80%",
      end: "top 60%",
      scrub: 0.2,
    },
  })
  .from(".my-skills-header", {
    duration: 0.5,
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".my-skills-header",
      start: "top 80%",
      end: "top 60%",
      scrub: 0.2,
    },
  })
  .from(".my-skills-content-item", {
    autoAlpha: 0,
    y: 50,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".my-skills-content",
      start: "top 70%",
      end: "bottom-=70% 30%",
      scrub: 0.2,
    },
    stagger: {
      from: "start",
      amount: 0.5,
      grid: "auto",
      axis: "y",
    },
  })
  .from(".my-projects-header-content", {
    duration: 0.5,
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".my-projects-header-content",
      start: "top 80%",
      end: "top 60%",
      scrub: 0.2,
    },
  })
  .from(".my-projects-content-item", {
    autoAlpha: 0,
    y: 50,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".my-projects-content",
      start: "top 70%",
      end: "bottom-=50% 30%",
      scrub: 0.2,
    },
    stagger: {
      from: "start",
      amount: 0.5,
      grid: "auto",
    },
  })
  .from(".contact-us-content", {
    duration: 0.5,
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".contact-us-content",
      start: "top 80%",
      end: "top 60%",
      scrub: 0.2,
    },
  })
  .from(".contact-us-content-left", {
    duration: 0.5,
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".contact-us-content",
      start: "top 50%",
      end: "top 30%",
      scrub: 0.2,
    },
  })
  .from(".contact-us-content-right", {
    duration: 0.5,
    autoAlpha: 0,
    y: 50,
    scrollTrigger: {
      trigger: ".contact-us-content",
      start: "top 50%",
      end: "top 30%",
      scrub: 0.2,
    },
  });
