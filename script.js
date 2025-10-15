document.addEventListener("DOMContentLoaded", () => {
  alert("Selamat datang di website perkenalan Octho Rivaldo Sinaga! 👋");

  const foto = document.querySelector(".foto-profil");
  foto.addEventListener("click", () => {
    foto.classList.toggle("foto-zoom");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".bagian");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 

      navLinks.forEach(l => l.classList.remove("aktif"));
      sections.forEach(s => s.classList.remove("aktif"));

      e.target.classList.add("aktif");

      const target = document.querySelector(link.getAttribute("href"));
      target.classList.add("aktif");
      
      
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

