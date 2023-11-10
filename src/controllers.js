import ToDo from "./classes/todo";
import Project from "./classes/project";

export class ToDoController {

    #findToDo(project, toDoName) {
        project.list.forEach(toDo => {
            if (toDo.title == toDoName) {
                return toDo;
            };
        });
    };

    createToDo(project, toDoName) {
        let toDo = new ToDo();
        toDo.title = toDoName;
        project.list = toDo;
    };

    deleteToDo(project, toDoName) {
        let toDo = this.#findToDo(project, toDoName);
        const index = project.list.indexOf(toDo);
        project.list.splice(index, 1);
    };

    updateToDo(project, toDoObject) {
        let toDo = this.#findToDo(project, toDoObject.name);
        toDo.name = toDoObject.title;
    }
};

