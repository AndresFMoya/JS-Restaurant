import './styles/index.scss';
import renderHeader from './components/header';
import renderAbout from './components/about';
import renderMenu from './components/menu';

function init() {
  console.log("Hello");
  renderHeader();
  renderAbout();
  renderMenu();
}

init();