const refs = {
  changeTheme: document.querySelector('.theme'),
  circle: document.querySelector('.circle'),
  body: document.querySelector('body'),
};

refs.changeTheme.addEventListener('click', () => {
  refs.circle.classList.toggle('dark-theme');
  refs.body.classList.toggle('dark');
  refs.circle.classList.toggle('dark');
  refs.changeTheme.classList.toggle('light');
});
