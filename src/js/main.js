
import burgerMenu from './modules/burger'
import modals from './modules/modals'
import take__send__form from './modules/forms'
import ReactCard from './modules/ReactCard.js'

window.addEventListener('DOMContentLoaded', () => {

    //menu
    burgerMenu('.header__burger', '.header__menu');

    //open modal
    modals('.popup__form','.popup__content .popup__close', '.footer__btn');

    // send form for button "Lets talk"
    take__send__form('.footer__formTotal', '.statusTitle', '#username',
    '#mail', '#message', '.footer__formTotal .error', '.popup__form');

    // send form for page Contacts
    take__send__form('.contacts__formTotal', '.statusAbout', '#name', '#email',
    '#text', '.contacts__formTotal .error', '.popup__form');

    })
