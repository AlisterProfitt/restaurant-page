import { showContent } from './content.js';
import { showMenu } from './menu.js';
import { showAbout } from './about.js';

showContent();

let homeButton = document.querySelector('#home');
let menuButton = document.querySelector('#menu');
let aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', showContent);
menuButton.addEventListener('click', showMenu);
aboutButton.addEventListener('click', showAbout);