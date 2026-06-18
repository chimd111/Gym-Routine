const elements = document.querySelectorAll('.card, .section h2');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

function toggle(card) {
  const exercises = card.querySelector('.exercises');
  const chevron = card.querySelector('.chevron');
  const isOpen = exercises.classList.contains('open');

  exercises.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}