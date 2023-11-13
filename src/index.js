import './style.css';
import Component from './classes/component';
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

const header = new Component('header');
header.parent = 'main';
header.build();

const headerTitle = new Component('logo');
headerTitle.parent = header.id;
headerTitle.tag = 'h3';
headerTitle.textContent = '2DoList';
headerTitle.build();

const headerButton = new Component('button');
headerButton.parent = header.id;
headerButton.tag = 'button';
headerButton.textContent = '+ New To-do';
headerButton.build();

const pageContent = new Component('content');
pageContent.parent = 'main';
pageContent.build();

const projectNavigation = new Component('project-navigation');
projectNavigation.parent = pageContent.id;
projectNavigation.build();

projectsList.list.forEach(project => {
    let component = new Component(project.name);
    component.parent = projectNavigation.id;
    component.tag = 'button';
    component.textContent = project.name;
    component.build();
});

const addProjectButton = new Component('button');
addProjectButton.parent = projectNavigation.id;
addProjectButton.tag = 'button';
addProjectButton.textContent = '+ Add new project';
addProjectButton.build();




