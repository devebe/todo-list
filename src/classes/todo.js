import Check from "./check";
import { FormattedDate, dateDifference } from "./date";

export default class ToDo {
    #title = '';
    #priority = {
        value: new Number(5),
        min: new Number(0),
        max: new Number(10),
    };
    #date = {
        created: new FormattedDate(),
        due: new FormattedDate(),
    };
    #checks = new Check();
    #description = '';
    #isCompleted = new Boolean('false');

    get title() {
        return this.#title;
    }

    set title(string) {
        this.#title = string;
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
        return this.#date.due.date;
    };

    set dueDate(date) {
        this.#date.due = new FormattedDate(date);
    };

    get description() {
        return this.#description;
    };

    set description(string) {
        this.#description = string;
    };

    get isCompleted() {
        return this.#isCompleted;
    };

    set isCompleted(bool) {
        this.#isCompleted = bool;
    };

    get daysLeft() {
        let current = new FormattedDate();
        return dateDifference(this.#date.due.date, current.date);
    };

    get age() {
        let current = new FormattedDate();
        return dateDifference(this.#date.created.date, current.date);
    };
};