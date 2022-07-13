import {format, parseISO} from "date-fns";

class BvDate {

    #date;
    #bc;

    static isoToString(date_string) {
        return format(parseISO(date_string), "d MMMM y G");
    }

    constructor (date_string) {
        this.bc = false;
        this.fromString(date_string);
    }

    getFullYear() {
        let year = super.getFullYear();
        if (this.bc) {
            year *= -1;
        }
        return year;
    }

    fromString(date_string) {
        if (date_string.startsWith("BC")) {
            date_string = date_string.slice(2, date_string.length);
            this.bc = true;
        }
        console.log(parseISO(date_string).getFullYear());
        this.date = parseISO(date_string);
    }

    toString() {
        return format(this.date, "d MMMM y G");
    }

}

export {BvDate};