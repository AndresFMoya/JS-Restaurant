import './styles/index.scss';
import renderHeader from './components/header';
import renderAbout from './components/about';

function init() {
  console.log("Hello");
  renderHeader();
  renderAbout()
}

init();