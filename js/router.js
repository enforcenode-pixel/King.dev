function navigate(hash) {
  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

document.querySelectorAll('[data-link]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const hash = btn.getAttribute('data-link');
    if (document.startViewTransition) {
      document.startViewTransition(() => navigate(hash));
    } else {
      navigate(hash);
    }
  });
});

// nav scroll spy
const navLinks = document.querySelectorAll('.nav__links a');
const sections = document.querySelectorAll('main section');
const linkMap = new Map();
navLinks.forEach((link) => linkMap.set(link.getAttribute('href').slice(1), link));

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        const active = linkMap.get(entry.target.id);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
);

sections.forEach((section) => spy.observe(section));

// Enhanced video carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const indicatorsWrap = document.querySelector('.carousel__indicators');
let index = 0;

slides.forEach((_, i) => {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.className = 'carousel__indicator';
  btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
  btn.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
  li.appendChild(btn);
  indicatorsWrap.appendChild(li);
});

const indicators = Array.from(
  indicatorsWrap.querySelectorAll('.carousel__indicator')
);

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
  slides.forEach((v, idx) => {
    if (idx === i) {
      v.play();
    } else {
      v.pause();
      v.currentTime = 0;
    }
  });
  indicators.forEach((dot, idx) =>
    dot.classList.toggle('is-active', idx === i)
  );
}

document.querySelector('.carousel__control.next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

document.querySelector('.carousel__control.prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

let timer = setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 8000);

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(timer));
carousel.addEventListener('mouseleave', () => {
  timer = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 8000);
});

slides.forEach((v) => v.setAttribute('playsinline', ''));
showSlide(index);
