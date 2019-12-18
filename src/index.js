import banner from './img/banner.jpg';
import res01 from './img/res01.jpg';
import './styles/index.scss';
import renderHeader from './components/header';
import renderAbout from './components/about';
import renderMenu from './components/menu';
import renderContact from './components/contact';

function clear() {
  document.getElementById('content').innerHTML='';
}

function init() {
  renderHeader();

  const about_link =   document.getElementById("about-link");
  about_link.addEventListener("click", clear);
  about_link.addEventListener("click", renderAbout);

  const menu_link =   document.getElementById("menu-link");
  menu_link.addEventListener("click", clear);
  menu_link.addEventListener("click", renderMenu)

  const contact_link =   document.getElementById("contact-link");
  contact_link.addEventListener("click", clear);
  contact_link.addEventListener("click", renderContact);
}

init();




