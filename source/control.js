import { PDAAppbar } from './components/pda-appbar.js';
import { PDASidebar } from './components/pda-sidebar.js';
import { PDAInfo } from './components/pda-info.js';
import { PDAWhiteboard } from './components/pda-whiteboard.js';

const pdaAppbar = new PDAAppbar();
const pdaSidebar = new PDASidebar();
const pdaInfo = new PDAInfo();
const pdawhiteboard = new PDAWhiteboard();

const header = document.getElementById('header');
header.appendChild(pdaSidebar);
header.appendChild(pdaInfo);

const main = document.getElementById('main');
main.appendChild(pdawhiteboard);

const footer = document.getElementById('footer');
footer.appendChild(pdaAppbar);