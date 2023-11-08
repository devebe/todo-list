import Check from "./check";

export default class ToDo {
    #title = new String('');
    #priority = {
        value: new Number(5),
        min: 0,
        max: 10,
    };
    #dueDate = new Date();
    #checks = new Check();
    #description = new String('');
    #isCompleted = new Boolean('false');

    get title() {
        return this.#title;
    }

    set title(string) {
        this.#title = string.toString();
    };

    get priority() {
        return this.#priority;
    };

    set priority(number) {
        if (!this.#checks.isOutOfBounds(number, this.#priority.min, this.#priority.max)) {
            this.#priority = parseInt(number);
        };
    };

    get dueDate() {
        return this.#dueDate;
    };

    set dueDate(date) {
        let formattedDate = new Date(date);
        this.#dueDate = formattedDate.toISOString().split('T')[0];
    };

    get description() {
        return this.#description;
    };

    set description(string) {
        this.#description = string;
    };
};