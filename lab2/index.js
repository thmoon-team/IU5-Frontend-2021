const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let isVisible = vw >= 786;
const navToggler = document.querySelector('button.navbar-toggler');

navToggler.addEventListener('click', (navToggled) => {
  navToggled.preventDefault();
  const navLinks = document.querySelector('ul.nav-links');
  const loginBtn = document.getElementById('login-btn');
  if (!isVisible) {
    const visibleNavLinksContainer = document.createElement('div');
    navLinks.classList.toggle('visible-nav-links');
    Array.prototype.forEach.call(navLinks.children, (li) => {
      li.classList.toggle('d-list-item');
    });
    visibleNavLinksContainer.classList.toggle('visible-nav-links-container');
    visibleNavLinksContainer.classList.toggle('hidden');
    visibleNavLinksContainer.appendChild(navLinks);
    if (vw <= 320) {
      loginBtn.classList.toggle('login-btn-visible');
      visibleNavLinksContainer.appendChild(loginBtn);
    }
    // eslint-disable-next-line no-nested-ternary
    const additionalPadding = vw <= 320 ? '280px' : (vw >= 440 && vw <= 768 ? '140px' : '200px');
    document.querySelector('h1.start-h').style.paddingTop = additionalPadding;
    document.querySelector('body').appendChild(visibleNavLinksContainer);
    setTimeout(() => {
      visibleNavLinksContainer.classList.toggle('hidden');
    }, 300);
  } else {
    const visibleNavLinksContainer = document.querySelector('.visible-nav-links-container');
    visibleNavLinksContainer.classList.toggle('hidden');
    setTimeout(() => {
      navLinks.classList.toggle('visible-nav-links');
      Array.prototype.forEach.call(navLinks.children, (li) => {
        li.classList.toggle('d-list-item');
      });
      const linksNavItem = document.querySelectorAll('.nav-item')[1];
      linksNavItem.appendChild(visibleNavLinksContainer.firstChild);
      if (vw <= 320) {
        const loginBtnNavItem = document.querySelectorAll('.nav-item')[2];
        loginBtn.classList.toggle('login-btn-visible');
        loginBtnNavItem.appendChild(loginBtn);
      }
      document.querySelector('h1.start-h').style.paddingTop = '90px';
      document.querySelector('body').removeChild(visibleNavLinksContainer);
    }, 300);
  }
  isVisible = !isVisible;
});
