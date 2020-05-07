import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}




function Person() {
    this.greet = function() {
        console.log("Hello there!");
    }
}

let john = new Person();
john.greet();

let jane = new Person();
jane.greet();
