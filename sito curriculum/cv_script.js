// ── DATI SKILLS ──────────────────────────────────────────────
const skills = [
  { name: 'Brand Identity',   level: 5 },
  { name: 'Art Direction',    level: 5 },
  { name: 'Editorial Design', level: 4 },
  { name: 'Motion Design',    level: 3 },
  { name: 'UX / Interface',   level: 3 },
  { name: 'Illustrazione',    level: 4 },
];

// ── RENDER SKILLS ─────────────────────────────────────────────
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  skills.forEach(s => {
    const dots = Array.from({ length: 5 }, (_, i) =>
      `<div class="dot ${i < s.level ? 'on' : ''}"></div>`
    ).join('');

    const entry = document.createElement('div');
    entry.className = 'skill-entry';
    entry.innerHTML = `
      <div class="skill-meta">
        <span class="skill-name">${s.name}</span>
        <div class="skill-dots">${dots}</div>
      </div>`;
    container.appendChild(entry);
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', renderSkills);
