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

const projectBtn=document.querySelector("#projectBtn");

projectBtn.addEventListener("click",function(){
  // scroll to #project
  document.querySelector("#projects").scrollIntoView({behavior:"smooth"});
});