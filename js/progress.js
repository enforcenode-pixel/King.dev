const bar = document.querySelector('.progress');
function update() {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / h) * 100;
  bar.style.width = `${scrolled}%`;
}
window.addEventListener('scroll', update);
update();
