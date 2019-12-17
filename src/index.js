import './styles/index.scss';
import renderHeader from './components/header';
import renderAbout from './components/about';
import renderMenu from './components/menu';
import renderContact from './components/contact';

function init() {
  console.log("Hello");
  renderHeader();
  renderAbout();
  renderMenu();
  renderContact()
}

init();