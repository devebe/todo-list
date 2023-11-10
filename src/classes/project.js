export default class Project {
    #list = [];
    
    constructor (name) {
        this.name = name;
    };

    get list() {
        return this.#list;
    };

    set list(item) {
        this.#list.push(item);
    };
};