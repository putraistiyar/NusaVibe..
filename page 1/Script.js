window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.background = "rgba(2, 6, 23, 0.95)";
    nav.style.padding = "10px 0";
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
  } else {
    nav.style.background = "rgba(2, 6, 23, 0.85)";
    nav.style.padding = "15px 0";
    nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.3)";
  }
});
