import AOS from 'aos';

import { menu, checkFounders } from './js/genericTags';
import scrollDown from './js/scrollDown';
import formObserver from './js/contact_form';

const location = window.location.pathname;
console.log(location);

if (
  location === '/pages/contact_ent_form.html' ||
  location === '/pages/contact_syndic_form.html' ||
  location === '/pages/contact_partic_form.html'
) {
  formObserver();
}

menu();
scrollDown();
checkFounders();

AOS.init();
AOS.refreshHard();
