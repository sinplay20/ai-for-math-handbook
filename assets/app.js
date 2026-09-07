const menuButton = document.querySelector('#menuButton');
const scrim = document.querySelector('#scrim');
const sidebar = document.querySelector('#sidebar');
const progress = document.querySelector('#readingProgress');
const navLinks = [...document.querySelectorAll('.side-nav a')];

function closeMenu() {
  document.body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

scrim?.addEventListener('click', closeMenu);
sidebar?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const value = total > 0 ? (window.scrollY / total) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
}, { passive: true });

const observed = document.querySelectorAll('.manual-section, #top');
const activeObserver = new IntersectionObserver(entries => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  const id = visible.target.id;
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}, { rootMargin: '-18% 0px -70% 0px', threshold: [0, 0.1, 0.5] });

observed.forEach(section => activeObserver.observe(section));

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copy);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.innerText);
      const original = button.textContent;
      button.textContent = '已复制';
      setTimeout(() => { button.textContent = original; }, 1400);
    } catch {
      button.textContent = '请手动复制';
    }
  });
});
