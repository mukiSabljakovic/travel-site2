import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import MobileMenu from './modules/RevealOnScroll'

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}


