const buttons = document.querySelectorAll('.category-btn');
const items = document.querySelectorAll('.recommended__item');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const cat = btn.dataset.category;
    items.forEach((item) => {
      const show = cat === 'all' || item.dataset.category === cat;
      item.style.display = show ? '' : 'none';
    });
  });
});
