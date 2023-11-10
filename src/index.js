import './style.css';
import ToDo from './classes/todo';
import Project from './classes/project';
import { ToDoController } from './controllers';

const proj1 = new Project('my TodoList');

const toDoController = new ToDoController(proj1);

toDoController.createToDo(proj1, 'watch movie');
toDoController.createToDo(proj1, 'test code');
toDoController.deleteToDo(proj1, 'test code');

console.log(proj1);
