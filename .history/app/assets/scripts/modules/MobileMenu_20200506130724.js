class MobileMenu {
    constructor() {
        document.querySelector(".site-header__menu-icon").addEventListener("click", function() {
            console.log("the top right icon was clicked");
        })
    }
}

export default MobileMenu;