import './style.css';
import { loadHeader } from './components/Navigation.js';
import { loadFooter } from './components/Footer.js';
import { initCatalog } from './components/Catalog.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    initCatalog();
});
