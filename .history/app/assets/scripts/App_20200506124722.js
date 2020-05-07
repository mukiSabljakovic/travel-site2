import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}

function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");

}

let john = {
    name: "John Doe",
    favoriteColor: "blue"
}

person(john.name, john.color);
person("Jane Smith", "green");