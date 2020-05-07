import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}



let john = {
    name: "John Doe",
    favoriteColor: "blue",
    greet: function() {
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + " .");
    }
}


john.greet();
