import './style.css';
import { loadHeader } from './components/Navigation.js';
import { loadFooter } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
