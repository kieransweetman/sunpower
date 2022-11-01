import AOS from 'aos';
import aos from 'aos/dist/aos.css';
import { menu, checkFounders } from './js/genericTags';
import scrollDown from './js/scrollDown';

menu();

scrollDown();

checkFounders();

AOS.init();
AOS.refreshHard();
