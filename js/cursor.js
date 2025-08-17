const cursor = document.querySelector('.cursor');

function moveCursor(e) {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
}

document.addEventListener('mousemove', moveCursor);

// hover enlarge
const interactive = document.querySelectorAll('a, button, .magnetic');
interactive.forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
});
