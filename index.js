import AOS from 'aos';
import aos from 'aos/dist/aos.css';
import { menu, checkFounders } from './js/genericTags';
import scrollDown from './js/scrollDown';
import mapGen from './js/map.js';
import formObserver from "./js/contact_form";

if (location.pathname.includes('/pages/contact_ent_form') || location.pathname.includes('/pages/contact_gen_form') || location.pathname.includes('/pages/contact_syn_form')) {
  formObserver();
}


menu();

scrollDown();

checkFounders();

AOS.init();
AOS.refreshHard();

mapGen();
