export class FormattedDate {
    constructor(date) {
        let formattedDate;
        if (date == undefined) {
            formattedDate = new Date();
        }
        else {
            formattedDate = new Date(date);
        };
        this.date = formattedDate.toISOString().split('T')[0];
    };
};

export const dateDifference = (date1, date2) => {
    let timeDiff = Math.abs(new Date(date1) - new Date(date2));
    let daysDiff = Math.round((timeDiff)/(1000 * 60 * 60 * 24));
    return daysDiff;
};