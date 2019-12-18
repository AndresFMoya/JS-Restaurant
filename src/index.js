import banner from './img/banner.jpg';
import res01 from './img/res01.jpg';
import './styles/index.scss';
import renderHeader from './components/header';
import renderAbout from './components/about';
import renderMenu from './components/menu';
import renderContact from './components/contact';

function clear() {
  document.getElementById('content').innerHTML = '';
}

function init() {
  renderHeader();

  const aboutLink = document.getElementById('about-link');
  aboutLink.addEventListener('click', clear);
  aboutLink.addEventListener('click', renderAbout);

  const menuLink = document.getElementById('menu-link');
  menuLink.addEventListener('click', clear);
  menuLink.addEventListener('click', renderMenu);

  const contactLink = document.getElementById('contact-link');
  contactLink.addEventListener('click', clear);
  contactLink.addEventListener('click', renderContact);
}

init();
