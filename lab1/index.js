window.onload = () => {
  const starting = document.getElementById('start-block');
  const navHeight = document.getElementById('nav-block').offsetHeight;
  starting.style.height = `${(starting.offsetHeight - navHeight)}px`;
};
