// const glow = document.querySelector(".cursor-glow");

// document.addEventListener("mousemove", (e) => {
//   // Update glow position
//   const x = e.clientX;
//   const y = e.clientY;

//   glow.style.left = `${x}px`;
//   glow.style.top = `${y}px`;
// });

// // Optional: Smooth animation frame update

// function updateGlowPosition(e) {
//   const x = e.clientX;
//   const y = e.clientY;

//   requestAnimationFrame(() => {
//     glow.style.left = `${x}px`;
//     glow.style.top = `${y}px`;
//   });
// }

// document.addEventListener("mousemove", updateGlowPosition);

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;

//     if (scrollY >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });
// });
