import throttle from 'lodash/throttle'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header");
        this.events();
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
    }

    runOnScroll() {
        if (window.scrollY > 60px) {
            this.siteHeader.classList.add("site-header--dark");
        } else {
            this.siteHeader.remove.add("site-header--dark");
        }
    }
}

export default StickyHeader;