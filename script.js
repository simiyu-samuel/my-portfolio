const links = document.querySelectorAll(".links");
const home = links[0];
const about = links[1];
const project = links[2];
const contact = links[3];

home.addEventListener("click", () => {
  home.classList.add("active");
  for (var i = 0; i <= links.length; i++) {
    if (links[i] != home) {
      links[i].classList.remove("active");
    }
  }
});

about.addEventListener("click", () => {
  about.classList.add("active");
  for (var i = 0; i <= links.length; i++) {
    if (links[i] != about) {
      links[i].classList.remove("active");
    }
  }
});

project.addEventListener("click", () => {
  project.classList.add("active");
  for (var i = 0; i <= links.length; i++) {
    if (links[i] != project) {
      links[i].classList.remove("active");
    }
  }
});
contact.addEventListener("click", () => {
  contact.classList.add("active");
  for (var i = 0; i <= links.length; i++) {
    if (links[i] != contact) {
      links[i].classList.remove("active");
    }
  }
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  document.querySelector("nav ul").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector("nav ul").style.display = "none";
  console.log(document.querySelector("body").style.width);
  //document.querySelector(".main-ul").style.display = "flex";
});
