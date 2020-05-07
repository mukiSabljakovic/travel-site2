import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}

function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");

}

person("John Doe", "blue");
person("Jane Smith", "green");