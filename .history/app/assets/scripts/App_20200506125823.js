import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
    module.hot.accept()
}






let john = new Person("John Doe", "blue");
john.greet();

let jane = new Person("Jane Smith", "green");
jane.greet();

