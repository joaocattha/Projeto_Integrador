const header = document.querySelector('header');

let lastScrollTop = 0;
let scrollThreshold = 5;

header.style.position = 'fixed';
header.style.top = '0';
header.style.width = '100%';
header.style.transition = 'transform 0.3s ease-in-out';
header.style.zIndex = '1000';

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (Math.abs(currentScroll - lastScrollTop) < scrollThreshold) {
    return;
  }
  
  if (currentScroll > lastScrollTop && currentScroll > header.offsetHeight) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

window.addEventListener('load', () => {
  if (window.pageYOffset === 0) {
    header.style.transform = 'translateY(0)';
  }
});