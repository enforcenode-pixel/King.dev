const input = document.getElementById('talent-search');
const filtersContainer = document.querySelector('.talent__filters');
const sortSelect = document.getElementById('talent-sort');
const grid = document.querySelector('.talent__grid');

export function initTalentSearch() {
  if (!input || !filtersContainer || !grid) return;
  const cards = Array.from(document.querySelectorAll('.talent-card'));
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

  const availBtn = document.createElement('button');
  availBtn.className = 'talent__filter';
  availBtn.textContent = 'Available Now';
  availBtn.dataset.available = 'true';
  availBtn.addEventListener('click', () => {
    availBtn.classList.toggle('is-active');
    filter();
  });
  filtersContainer.appendChild(availBtn);

  function filter() {
    const query = input.value.toLowerCase();
    const activeSkills = Array.from(
      filtersContainer.querySelectorAll('.talent__filter.is-active[data-skill]')
    ).map((b) => b.dataset.skill);
    const requireAvailable = availBtn.classList.contains('is-active');

    cards.forEach((card) => {
      const text = `${card.dataset.name} ${card.dataset.skills}`.toLowerCase();
      const matchesQuery = text.includes(query);
      const matchesSkills =
        activeSkills.length === 0 ||
        activeSkills.every((skill) => card.dataset.skills.includes(skill));
      const matchesAvail = !requireAvailable || card.dataset.available === 'true';
      card.style.display = matchesQuery && matchesSkills && matchesAvail ? '' : 'none';
    });

    sort();
  }

  function sort() {
    const visible = cards.filter((c) => c.style.display !== 'none');
    visible.sort((a, b) => {
      if (sortSelect.value === 'name') {
        return a.dataset.name.localeCompare(b.dataset.name);
      }
      return Number(b.dataset.rating) - Number(a.dataset.rating);
    });
    visible.forEach((card) => grid.appendChild(card));
  }

  input.addEventListener('input', filter);
  sortSelect.addEventListener('change', filter);
}

initTalentSearch();
