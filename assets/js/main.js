// ═══════════════════════════════════════════════════
//  ACADEMIC PORTFOLIO · main.js
// ═══════════════════════════════════════════════════

// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');

if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Close sidebar when a nav link is clicked on mobile
  sidebar.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

// ── Set active nav link based on current page ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  link.classList.remove('active');
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) link.classList.add('active');
  if (currentPage === '' && href === 'index.html') link.classList.add('active');
});

// ── Fieldwork placeholder images: hide img if missing, show placeholder ──
document.querySelectorAll('.fieldwork-img-wrap img').forEach(img => {
  img.addEventListener('error', function () {
    this.style.display = 'none';
    const placeholder = this.nextElementSibling;
    if (placeholder) placeholder.style.display = 'flex';
  });
});

// ── GitHub Repositories: live fetch (optional) ──
// If you set data-username on a .repo-grid, this auto-fetches your repos.
const repoGrid = document.querySelector('.repo-grid[data-username]');
if (repoGrid) {
  const username = repoGrid.getAttribute('data-username');
  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
    .then(r => r.json())
    .then(repos => {
      if (!Array.isArray(repos)) return; // handle API rate-limit or errors
      repoGrid.innerHTML = '';
      repos
        .filter(r => !r.fork)
        .slice(0, 8)
        .forEach(repo => {
          const langClass = (repo.language || '').toLowerCase().replace(/[^a-z]/g, '');
          const card = document.createElement('div');
          card.className = 'repo-card';
          card.innerHTML = `
            <div class="repo-name">${repo.name}</div>
            <p class="repo-desc">${repo.description || 'No description provided.'}</p>
            <div class="repo-meta">
              ${repo.language
                ? `<span class="repo-lang"><span class="lang-dot ${langClass}"></span>${repo.language}</span>`
                : ''}
              <a href="${repo.html_url}" target="_blank" class="repo-link">View on GitHub →</a>
            </div>
          `;
          repoGrid.appendChild(card);
        });
    })
    .catch(() => {
      // silently fail — static cards remain
    });
}

// ── Subtle scroll reveal ──
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.08
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.highlight-card, .interest-card, .pub-item, .fieldwork-item, .repo-card, .cv-entry'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  revealObserver.observe(el);
});
