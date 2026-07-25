// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form — placeholder handler until a real submission endpoint is wired up
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted (demo only) — this needs to be connected to a real form handler before launch. See the TODO comment in index.html.');
  });
}
