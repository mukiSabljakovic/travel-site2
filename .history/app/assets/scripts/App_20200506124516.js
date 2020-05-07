import '../styles/styles.css'

if (module.hot) {
    module.hot.accept()
}

function person() {
    console.log("Hello, my name is " + blank + " and my favorite color is " + blank + ".");

}

person("John Doe", "blue");
person("Jane Smith", "green");