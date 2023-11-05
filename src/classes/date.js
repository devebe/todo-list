export default class FormattedDate {
    constructor () {
       let date = new Date();
       this.date = date.toISOString().split('T')[0];
    };
};