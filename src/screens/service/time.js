class TimeToDate{
    static format(dateFromDB){
        let separated = dateFromDB.split("-");
        separated[2] = separated[2].split(" ")[0];
        let month = ["января","февраля","марта","апреля","мая","июня",
                     "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        return separated[2] + " " + month[separated[1]-1] + " " + separated[0];
    }
}

export default TimeToDate;