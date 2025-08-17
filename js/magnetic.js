const magneticItems = document.querySelectorAll('.magnetic');

magneticItems.forEach((item) => {
  const strength = 30;
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translate(0, 0)';
  });
});
