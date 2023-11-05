"use strict";
import FormattedDate from "./date";

export default class toDo {
    constructor (title) {
        this.title = new String(`${title}`);
        this.description = new String('');
        this.dueDate = new FormattedDate();
        this.priority = new Number(0);
    };
};