import Controller from './controller';
import View from './view';
import Store from './store';

import './styles';
// import './style/reset.scss';

const view = new View();
const store = new Store();
const controller = new Controller(view, store);

const initialize = () => controller.initialize();

window.addEventListener('load', initialize);
