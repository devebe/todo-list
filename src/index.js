import './style.css';
import Project from './classes/project';
import { ToDoController } from './controllers';

const proj1 = new Project('my TodoList');

const toDoController = new ToDoController(proj1);

toDoController.create('watch movie');
toDoController.create('test code');
toDoController.create('test frode');
toDoController.delete('watch movie');
toDoController.delete('test code');
toDoController.read('test frode','dueDate');
toDoController.update('test frode', 'title', 'test code');

console.log(proj1);

