import AOS from 'aos';
import aos from 'aos/dist/aos.css';
import menu from './js/genericTags';
import scrollDown from './js/scrollDown';
import formObserver from './js/contact_form';

const location = window.location.pathname;

if (
  location === '/pages/contact_ent_form.html' ||
  location === '/pages/contact_syndic_form.html' ||
  location === '/pages/contact_partic_form.html'
) {
  formObserver();
}

menu();
scrollDown();
AOS.init();
AOS.refreshHard();
