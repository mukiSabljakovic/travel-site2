import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}




function Person() {
    this.name = fullName;
    this.favoriteColor = favColor; 
    this.greet = function() {
        console.log("Hello there!");
    }
}

let john = new Person("John Doe", "blue");
john.greet();

let jane = new Person("Jane Smith", "green");
jane.greet();
