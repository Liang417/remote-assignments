const message = document.querySelector('.welcome_message');
const section = document.querySelector('section.hidden');
const btn = document.querySelector('button');

message.addEventListener(
  'click',
  () => {
    message.innerHTML = `<h1 class='big'>Have a Good Time!</h1>`;
  },
  { once: true }
);

btn.addEventListener('click', () => {
  section.classList.remove('hidden');
  section.classList.add('show');
  window.scrollTo({
    top: section.offsetHeight,
    behavior: 'smooth',
  });
});
