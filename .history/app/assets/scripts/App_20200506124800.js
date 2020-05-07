import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}



let john = {
    name: "John Doe",
    favoriteColor: "blue"
    greet: function() {
        console.log("Oh hello!");
    }
}


john.greet();
