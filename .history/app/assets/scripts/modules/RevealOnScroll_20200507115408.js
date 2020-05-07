class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll(".feature-item");
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => el.classList.add("reveal-item"));
    }
}

export default RevealOnScroll;