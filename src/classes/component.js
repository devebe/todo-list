export default class Component {
    #parent = '';
    #tag = 'div';
    #textContent = '';
    #class = '';
    
    constructor (name) {
        this.name = name;
        this.id = name;
    };

    get parent() {
        return this.#parent;
    };

    set parent(name) {
        this.#parent = name;
    };

    get tag() {
        return this.#tag;
    };

    set tag(type) {
        this.#tag = type;
    };

    get textContent() {
        return this.#textContent;
    }

    set textContent(text) {
        this.#textContent = text
    };

    get class() {
        return this.#class;
    }

    set class(value) {
        this.#class = value;
    }

    build() {
        let parent = document.getElementById(this.parent);
        let child = document.createElement(this.tag);
        child.id = this.id;
        if (this.textContent) {
            child.textContent = this.textContent;
        };
        if (this.class) {
            child.classList.add(this.class);
        }
        parent.appendChild(child);
    };
};