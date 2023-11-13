import ToDo from "./classes/todo";
import Project from "./classes/project";

export class ToDoController {
    constructor (project) {
        this.project = project;
    }

    #find(toDoName) {
        this.project.list.forEach(toDo => {
            // rewrite this to use ID instead of name as name can be duplicated
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
    };

    update(toDoName, key, value) {
        this.#find(toDoName);
        this.project.list[this.index][key] = value; 
    };

    delete(toDoName) {
        this.#find(toDoName);
        this.project.list.splice(this.index, 1);
    };
};

export class ProjectsController {
    #select = '';
    
    constructor () {
        this.list = [];
    };

    get selectedProject() {
        return this.#select;
    }

    set selectedProject(projectName) {
        this.#find(projectName);
        this.toDoController = new ToDoController(this.list[this.index]);
        this.#select = projectName;
    };

    #find(projectName) {
        this.list.forEach(project => {
            if (project.name == projectName) {
                this.index = this.list.indexOf(project);
            };
        });
    };
    
    create(projectName) {
        let project = new Project(projectName);
        project.name = projectName;
        this.list.push(project);
    };

    read(projectName) {
        this.#find(projectName);
        console.log(this.list[this.index]);
    };

    update(projectName, key, value) {
        this.#find(projectName);
        this.list[this.index][key] = value;
    };

    delete(projectName) {
        this.#find(projectName);
        this.list.splice(this.index, 1);
    };
};

