import './style.css';
import Project from './classes/project';
import { ProjectsController } from './controllers';

const projectsList = new ProjectsController();

projectsList.create('My first project');
projectsList.update('My first project', 'name', 'My very first project');
projectsList.selectedProject = 'My very first project';
projectsList.toDoController.create('Let us do something');
projectsList.toDoController.create('Let us do a second thing');
projectsList.create('My second project');
projectsList.selectedProject = 'My second project';
projectsList.toDoController.create('Another thing I need to do')
projectsList.toDoController.create('Let us do a second thing');
projectsList.toDoController.update('Another thing I need to do', 'dueDate', '2023-11-19');

console.log(projectsList.list);
