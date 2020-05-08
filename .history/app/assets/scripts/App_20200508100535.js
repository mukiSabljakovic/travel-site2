import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'



let stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 66);

let mobileMenu = new MobileMenu();
let modal;


document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        import('./modules/Modal').then(x => {
            modal = new x.default();
        }).catch(() => console.log("there was a problem.");)
    })
})

if (module.hot) {
    module.hot.accept()
}


