/* =========================================================
   SAGEL — Personal Website
   Minimal vanilla JS
   - Mobile nav toggle (with aria-expanded)
   - Auto-update footer year
   - Highlight active nav link
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. Mobile navigation toggle ----------------------- */
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');

  if (toggle && links) {
    const setOpen = (open) => {
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    };

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('is-open');
      setOpen(!isOpen);
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setOpen(false));
    });

    // Close menu on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('is-open')) setOpen(false);
    });
  }

  /* 2. Auto-update copyright year --------------------- */
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* 3. Highlight current page in nav ------------------ */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
});
