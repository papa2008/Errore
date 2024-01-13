(() => { 
  const mobileMenu = document.querySelector(".drawer"); 
  const openMenuBtn = document.querySelector(".header__hamburder"); 
  const closeMenuBtn = document.querySelector(".drawer__btn"); 
 
  const toggleMenu = () => { 
    const isMenuOpen = 
      openMenuBtn.getAttribute("aria-expanded") === "true" || false; 
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen); 
    mobileMenu.classList.toggle("is-open"); 
    openMenuBtn.classList.toggle("header__hamburder--active"); 
    bodyScrollLock[scrollLockMethod](document.body);
    const scrollLockMethod = !isMenuOpen 
      ? "disableBodyScroll" 
      : "enableBodyScroll"; 
    bodyScrollLockscrollLockMethod; 
  }; 
 
  openMenuBtn.addEventListener("click", toggleMenu); 
  closeMenuBtn.addEventListener("click", toggleMenu); 
 
  // Close the mobile menu on wider screens if the device orientation changes 
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => { 
    if (!e.matches) return; 
    mobileMenu.classList.remove("is-open"); 
    openMenuBtn.setAttribute("aria-expanded", false); 
    bodyScrollLock.enableBodyScroll(document.body); 
  }); 
})();