import './style.css';
import { ProjectsController } from './controllers';

const projectsList = new ProjectsController();

projectsList.create('My first project');
projectsList.update('My first project', 'name', 'My very first project');
projectsList.selectedProject = 'My very first project';
projectsList.toDoController.create('Let us do something');
projectsList.toDoController.create('Let us do a second thing');
projectsList.create('My second project');
projectsList.selectedProject = 'My second project';
projectsList.update('My second project', 'name', 'My very second project');
projectsList.toDoController.create('Another thing I need to do')
projectsList.toDoController.create('Let us do a second thing');
projectsList.toDoController.create('Let us do a third thing');
projectsList.toDoController.update('Another thing I need to do', 'dueDate', '2023-11-19');

projectsList.list.forEach(project => {
    project.list.forEach(toDo => {
        console.log(toDo);
        // let body = document.querySelector('body');
        // body.textContent = body.textContent + toDo.title + toDo.dueDate;
    });
});
