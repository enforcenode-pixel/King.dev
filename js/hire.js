const buttons = document.querySelectorAll('.btn--hire');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.talent-card');
    const name = card?.dataset.name || 'talent';
    window.location.href = `mailto:hire@pps.dev?subject=Hire%20${encodeURIComponent(name)}`;
  });
});
