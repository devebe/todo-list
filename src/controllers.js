import ToDo from "./classes/todo";
import Project from "./classes/project";

export class ToDoController {
    constructor (project) {
        this.project = project;
    }

    #find(toDoName) {
        this.project.list.forEach(toDo => {
            if (toDo.title == toDoName) {
                this.index = this.project.list.indexOf(toDo);
            }
        });
    };

    create(toDoName) {
        let toDo = new ToDo();
        toDo.title = toDoName;
        this.project.list = toDo;
    };

    read(toDoName, key) {
        this.#find(toDoName);
        console.log(this.project.list[this.index][key]);
    }

    update(toDoName, key, value) {
        this.#find(toDoName);
        let updateToDo = this.project.list[this.index];
        updateToDo[key] = value; 
    };

    delete(toDoName) {
        this.#find(toDoName);
        this.project.list.splice(this.index, 1);
    };
};

export class ProjectController {
    #findProject(projectList, projectName) {
        projectList.forEach(project => {
            if (project.name == projectName) {
                return project;
            };
        });
    };
    
    createProject(projectName) {
        let project = new Project(projectName);
        project.name = projectName;
    };
};

