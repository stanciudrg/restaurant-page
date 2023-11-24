import init from './components/init.js';
import getPages from './components/pages.js';
import { attachDefaultEvents } from './components/eventsHandler.js'
import loadPage from './components/pageLoader.js';
import './styles/normalize.css';
import './styles/style.css';

// Start by loading init's header and footer, and loadHomePage's main content
init();
loadPage(getPages()[0]);
attachDefaultEvents();