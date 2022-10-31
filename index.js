import AOS from 'aos';
import aos from 'aos/dist/aos.css';
import menu from './js/genericTags';
import scrollDown from './js/scrollDown';
import mapGen from './js/map.js'

menu();
scrollDown();
AOS.init();
AOS.refreshHard();

mapGen();
