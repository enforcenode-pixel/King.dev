const parallaxEls = document.querySelectorAll('[data-parallax]');

function onScroll() {
  const scrollY = window.scrollY;
  parallaxEls.forEach((el) => {
    el.style.transform = `translateY(${scrollY * -0.2}px)`;
  });
}

export function initParallax() {
  window.addEventListener('scroll', onScroll, { passive: true });
}

initParallax();
