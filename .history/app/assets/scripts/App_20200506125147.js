import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}




function Person() {
    this.greet = function() {
        console.log("Hello there!");
    }
}

let john =  new Person() {
    name: "John Doe",
    favoriteColor: "blue",
    greet: function() {
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + " .");
    }
}

john.greet();
