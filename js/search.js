const input = document.getElementById('talent-search');
const filtersContainer = document.querySelector('.talent__filters');

export function initTalentSearch() {
  if (!input || !filtersContainer) return;
  const cards = document.querySelectorAll('.talent-card');
  const skills = new Set();
  cards.forEach((card) =>
    card.dataset.skills.split(' ').forEach((skill) => skills.add(skill))
  );

  skills.forEach((skill) => {
    const btn = document.createElement('button');
    btn.className = 'talent__filter';
    btn.textContent = skill.charAt(0).toUpperCase() + skill.slice(1);
    btn.dataset.skill = skill;
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-active');
      filter();
    });
    filtersContainer.appendChild(btn);
  });

  function filter() {
    const query = input.value.toLowerCase();
    const activeSkills = Array.from(
      filtersContainer.querySelectorAll('.talent__filter.is-active')
    ).map((b) => b.dataset.skill);

    cards.forEach((card) => {
      const text = `${card.dataset.name} ${card.dataset.skills}`.toLowerCase();
      const matchesQuery = text.includes(query);
      const matchesSkills =
        activeSkills.length === 0 ||
        activeSkills.every((skill) => card.dataset.skills.includes(skill));
      card.style.display = matchesQuery && matchesSkills ? '' : 'none';
    });
  }

  input.addEventListener('input', filter);
}

initTalentSearch();
