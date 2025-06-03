// Toggle mobile menu
document.getElementById("hamburger").onclick = () => {
  const nav = document.getElementById("main-nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};

// Toggle Directory submenu
document.getElementById("directory-btn").onclick = () => {
  const menu = document.getElementById("directory-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

// Toggle Shop submenu
document.getElementById("shop-btn").onclick = () => {
  const menu = document.getElementById("shop-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};
