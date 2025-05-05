// Gestion du menu
function showExercise(id) {
  document.querySelectorAll('.exercise').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Exercice 1 : Définitions avec liens Wikipedia
const definitions = new Map([
  ['ipsum', { titre: 'Ipsum', url: 'https://fr.wikipedia.org/wiki/Lorem_ipsum' }],
  ['amet', { titre: 'Amet', url: 'https://fr.wikipedia.org/wiki/Lorem_ipsum' }],
  ['dolor', { titre: 'Dolor', url: 'https://fr.wikipedia.org/wiki/Lorem_ipsum' }],
  ['consectetur', { titre: 'Consectetur', url: 'https://fr.wikipedia.org/wiki/Lorem_ipsum' }],
  ['adipiscing', { titre: 'Adipiscing', url: 'https://fr.wikipedia.org/wiki/Lorem_ipsum' }]
]);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.def-word').forEach(word => {
    word.addEventListener('click', e => {
      const def = definitions.get(e.target.dataset.key);
      if (def && def.url) {
        window.open(def.url, '_blank');
      }
    });
  });
});

// Exercice 2 : Formulaire
const form = document.getElementById('visitForm');
const tbody = document.querySelector('#visitorTable tbody');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nom = form.nom.value;
  const prenom = form.prenom.value;
  const filiere = form.filiere.value;
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${nom}</td><td>${prenom}</td><td>${filiere}</td>`;
  tbody.appendChild(tr);
  form.reset();
});

// Exercice 3 : Compte à rebours vers la fin d'année scolaire
function startCountdown(date, description) {
  const countdownEl = document.getElementById('countdown');
  const titleEl = document.getElementById('countdown-title');
  if (titleEl && description) {
    titleEl.textContent = description;
  }

  function update() {
    const now = new Date();
    const distance = date - now;
    if (distance <= 0) {
      countdownEl.textContent = "L'évènement est arrivé ! 🎉";
      return;
    }
    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heures = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const secondes = Math.floor((distance / 1000) % 60);
    countdownEl.textContent = `${jours} jours, ${heures} heures, ${minutes} minutes, ${secondes} secondes`;
    setTimeout(update, 1000);
  }
  update();
}

// Exemple : compte à rebours jusqu'à la fin des cours (28 juin 2025 à 12h)
startCountdown(new Date('2025-06-28T12:00:00'), "Fin de l'année scolaire");

// Exercice 4 : Calendrier
const calendarForm = document.getElementById('calendarForm');
const calendarDiv = document.getElementById('calendar');

calendarForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const day = parseInt(calendarForm.day.value);
  const month = parseInt(calendarForm.month.value);
  const year = parseInt(calendarForm.year.value);
  const size = calendarForm.taille.value;
  const color = calendarForm.color.value;
  calendarDiv.innerHTML = generateCalendar(day, month, year, size, color);
});

function generateCalendar(startDay, month, year, size, color) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const jours = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];

  let html = `<table style="border: 1px solid #000; color:${color}; font-size:${size === 'petit' ? '12px' : size === 'moyen' ? '16px' : '20px'}"><thead><tr>`;
  jours.forEach(j => html += `<th>${j}</th>`);
  html += `</tr></thead><tbody><tr>`;

  let emptyCells = (startDay + 6) % 7;
  for (let i = 0; i < emptyCells; i++) html += '<td></td>';

  for (let d = 1; d <= daysInMonth; d++) {
    html += `<td>${d}</td>`;
    if ((d + emptyCells) % 7 === 0) html += '</tr><tr>';
  }
  html += '</tr></tbody></table>';
  return html;
}
