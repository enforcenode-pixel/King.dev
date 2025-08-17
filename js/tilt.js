const items = document.querySelectorAll('.tilt');
const max = 10;

items.forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateX(${ -y * max }deg) rotateY(${ x * max }deg) scale(1.03)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});
